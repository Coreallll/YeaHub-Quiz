import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { QuizFormValues } from "../pages/QuizPage/QuizPage.tsx";
import { useEffect } from "react";

export const useQuizForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const methods = useForm<QuizFormValues>({
    defaultValues: {
      spec: Number(searchParams.get("spec") ?? 11),
      skills: searchParams.get("skills")?.split(",").map(Number) ?? [],
      complexity: searchParams.get("complexity")?.split(",").map(Number) ?? [],
      questionsLimit: Number(searchParams.get("limit") ?? 1),
    },
  });

  function onSubmit(data: QuizFormValues) {
    console.log(data);
    const params = new URLSearchParams();

    if (data.spec !== null) {
      params.set("spec", String(data.spec));
    }

    params.set("skills", data.skills.join(","));
    params.set("complexity", data.complexity.join(","));
    params.set("questionsLimit", String(data.questionsLimit));

    navigate(`/quiz?${params.toString()}`);
  }

  const spec = methods.watch("spec");
  const skills = methods.watch("skills");
  const complexity = methods.watch("complexity");
  const questionsLimit = methods.watch("questionsLimit");

  useEffect(() => {
    const params = new URLSearchParams();

    if (spec !== null) {
      params.set("spec", String(spec));
    }

    if (skills.length > 0) {
      params.set("skills", skills.join(","));
    }

    if (complexity.length > 0) {
      params.set("complexity", complexity.join(","));
    }

    if (questionsLimit >= 1) {
      params.set("questionsLimit", String(questionsLimit));
    }

    setSearchParams(params, {
      replace: true,
    });
  }, [spec, skills, complexity, questionsLimit, setSearchParams]);

  return { methods, onSubmit };
};
