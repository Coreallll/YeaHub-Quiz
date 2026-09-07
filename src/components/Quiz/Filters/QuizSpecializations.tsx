import { useSpecializations } from "../../../hooks/useSpecializations.ts";
import FilterButton from "../../ui/FilterButton/FilterButton.tsx";
import { useFormContext } from "react-hook-form";
import type { QuizFormValues } from "../../../pages/QuizPage/QuizPage.tsx";
import styles from "./QuizFilters.module.css";
import { useState } from "react";

export default function QuizSpecializations() {
  const { watch, setValue } = useFormContext<QuizFormValues>();
  const selectedSpec = watch("spec");

  function selectSpec(id: number) {
    setValue("spec", id);
  }

  const { specs } = useSpecializations(20);

  const [showAllSpecs, setShowAllSpecs] = useState(false);

  const visibleSpecs = showAllSpecs ? specs : specs.slice(0, 10);

  return (
    <section>
      <h3 className={styles.sectionTitle}>Выбор специализации</h3>
      <ul className={styles.filtersList}>
        {visibleSpecs.map((spec) => {
          const isSelected = selectedSpec === spec.id;

          return (
            <li key={spec.id}>
              <FilterButton
                onClick={() => selectSpec(spec.id)}
                className={isSelected ? styles.active : ""}
              >
                {spec.title}
              </FilterButton>
            </li>
          );
        })}
      </ul>
      {specs.length > 4 ? (
        <button
          className={styles.filtersAll}
          onClick={() => {
            setShowAllSpecs((prev) => !prev);
          }}
        >
          {showAllSpecs ? "Скрыть" : "Посмотреть все"}
        </button>
      ) : null}
    </section>
  );
}
