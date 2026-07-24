import DOMPurify from "dompurify";
import parse, {Element, type HTMLReactParserOptions} from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {memo, useMemo} from "react";
import type { ChildNode } from "domhandler";

function extractText(node: ChildNode): string {

  if (node.type === "text") {
    return node.data ?? "";
  }

  if ("children" in node) {
    return node.children.map(extractText).join("");
  }

  return "";
}

function normalizeLanguage(className = "", code = "") {
  const match = className.match(/language-([^\s]+)/);
  let language = match?.[1] ?? "";

  if (language === "typescriptreact") return "tsx";
  if (language === "javascriptreact") return "jsx";
  if (language === "html") return "markup";
  if (language === "css") return "css";
  if (language === "javascript") return "javascript";
  if (language === "typescript") return "typescript";

  if (
    code.includes("const ") ||
    code.includes("function ") ||
    code.includes("=>") ||
    code.includes("return ")
  ) {
    return "javascript";
  }

  if (code.includes("<") && code.includes(">")) {
    return "markup";
  }

  return "javascript";
}

interface RenderAnswerProps {
  answer: string;
}

export default memo(function RenderAnswer({ answer }:RenderAnswerProps) {
  const parsedAnswer = useMemo(() => {

    const cleanHtml = DOMPurify.sanitize(answer ?? "");

    const options: HTMLReactParserOptions = {
      replace(node) {
        if (!(node instanceof Element) || node.name !== "pre") {
          return;
        }

        const codeNode = node.children.find(
          (child): child is Element =>
            child instanceof Element && child.name === "code"
        );

        if (!codeNode) return;

        const code = extractText(codeNode);

        const language = normalizeLanguage(
          codeNode.attribs.class ?? "",
          code
        );

        return (
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
              margin: "16px 0",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "14px",
            }}
          >
            {code}
          </SyntaxHighlighter>
        );
      },
    };
    return parse(cleanHtml, options);
  }, [answer]);

  return parsedAnswer;
});