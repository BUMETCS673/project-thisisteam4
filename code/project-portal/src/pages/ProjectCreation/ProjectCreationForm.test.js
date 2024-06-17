import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProjectCreationForm from "./ProjectCreationForm";

describe("ProjectCreationForm", () => {
  test("renders form and submits data", () => {
    const handleSubmit = jest.fn();

    render(<ProjectCreationForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/Project Name/i), {
      target: { value: "Test Project" },
    });
    fireEvent.change(screen.getByLabelText(/Project Owner/i), {
      target: { value: "Test Owner" },
    });
    fireEvent.change(screen.getByLabelText(/Project Members/i), {
      target: { value: "Test Members" },
    });
    fireEvent.change(screen.getByLabelText(/Project Description/i), {
      target: { value: "Test Description" },
    });
    fireEvent.change(screen.getByLabelText(/Project Creation Date/i), {
      target: { value: "2022-01-01" },
    });
    fireEvent.change(screen.getByLabelText(/Project Type/i), {
      target: { value: "Test Type" },
    });
    fireEvent.change(screen.getByLabelText(/Project Status/i), {
      target: { value: "Test Status" },
    });
    fireEvent.change(screen.getByLabelText(/Project Completion Date/i), {
      target: { value: "2022-12-31" },
    });

    fireEvent.click(screen.getByText(/Create Project/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "Test Project",
      owner: "Test Owner",
      members: "Test Members",
      description: "Test Description",
      creationDate: "2022-01-01",
      type: "Test Type",
      status: "Test Status",
      completionDate: "2022-12-31",
    });
  });
});
