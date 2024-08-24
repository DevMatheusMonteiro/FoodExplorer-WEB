import { Container } from "./styles";

import { FaChevronDown, FaChevronUp, FaCheck, FaFilter } from "react-icons/fa6";

import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

export function Select({
  id,
  options,
  srOnly = false,
  hideIcon = false,
  hideAll = false,
  newOption = false,
  label,
  defaultOption,
  name,
  selectedOption = { value: "", label: "" },
  setSelectedOption,
  error = false,
  setError,
  ...rest
}) {
  let optionsViewButton = useRef();
  let newOptionInput = useRef();
  const [newOptionValue, setNewOptionValue] = useState();
  let select = useRef();

  function collapseSelect(e) {
    const isMouseOrTouch =
      e.type === "click"
        ? e.nativeEvent.pointerType === "mouse" ||
          e.nativeEvent.pointerType === "touch"
        : false;

    const isSpaceOrEsc =
      e.type === "keydown" ? e.key === " " || e.key === "Escape" : false;

    (isSpaceOrEsc || isMouseOrTouch) && optionsViewButton.current?.click();
  }

  function handleChangeSelected(option) {
    error && setError(false);
    setSelectedOption(option);
  }

  return (
    <Container className="select-container">
      <div className="select" ref={select}>
        <label data-sronly={srOnly} htmlFor={id}>
          {label}
        </label>
        <input
          {...rest}
          type="checkbox"
          className="options-view-button"
          id={id}
          ref={optionsViewButton}
        />

        <div className="select-button" data-error={error}>
          <div className="logo-value">
            <FaFilter data-hide={hideIcon} />
            {selectedOption.value == "new" ? (
              <input
                defaultValue={newOptionValue}
                className="new-value"
                ref={newOptionInput}
                onChange={(e) => {
                  setNewOptionValue(e.target.value);
                  handleChangeSelected({ value: "new", label: e.target.value });
                }}
              />
            ) : selectedOption.label == "" ? (
              <p className="default-value">{defaultOption}</p>
            ) : (
              <p className="selected-value">{selectedOption.label}</p>
            )}
          </div>

          <div className="chevrons">
            <FaChevronDown data-chevron="chevronDown" />
            <FaChevronUp data-chevron="chevronUp" />
          </div>
        </div>
      </div>

      {options?.length > 0 && (
        <ul className="options-list">
          {hideAll === false && (
            <li className="option-value">
              <input
                type="radio"
                name={name}
                id="default"
                value="default"
                defaultChecked={selectedOption.value === ""}
                onClick={(e) => {
                  handleChangeSelected({ value: "", label: "" });
                  collapseSelect(e);
                }}
                onKeyDown={(e) => {
                  handleChangeSelected({ value: "", label: "" });
                  collapseSelect(e);
                }}
              />
              <div className="default-option">
                <label htmlFor="all" className="label">
                  Todos
                </label>
                <FaCheck />
              </div>
            </li>
          )}
          {newOption && (
            <li className="option-value">
              <input
                type="radio"
                name={name}
                id="new"
                value={newOptionValue}
                onClick={(e) => {
                  handleChangeSelected({
                    value: "new",
                    label: newOptionValue,
                  });
                  newOptionInput.current?.focus();
                  collapseSelect(e);
                }}
                onKeyDown={(e) => {
                  handleChangeSelected({ value: "new", label: newOptionValue });
                  newOptionInput.current?.focus();
                  collapseSelect(e);
                }}
              />
              <div className="new-option">
                <label htmlFor="new" className="label">
                  Adicionar
                </label>
                <FaPlus />
              </div>
            </li>
          )}
          {options.map((option, index) => (
            <li className="option-value" key={index}>
              <input
                type="radio"
                name={name}
                id={option.value}
                value={option.value}
                defaultChecked={selectedOption.value === option.value}
                onClick={(e) => {
                  handleChangeSelected(option);
                  collapseSelect(e);
                }}
                onKeyDown={(e) => {
                  handleChangeSelected(option);
                  collapseSelect(e);
                }}
              />

              <div>
                <label htmlFor={option.value} className="label">
                  {option.label}
                </label>
                <FaCheck />
              </div>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
