import { CBadge } from "@coreui/react";
import React from "react";


export const steps = [
  { index: 1, text: "Cumplimiento del Reglamento Disciplinario Interno", points: "", badgeType: "" },
  { index: 2, text: "Aplicación de medidas disciplinarias", points: "", badgeType: "" },
  { index: 3, text: "Participación en las actividades del Programa Político Ideológico (PPI)", points: "", badgeType: "" },
  { index: 4, text: "Calidad en la elaboración de la documentación primaria (control interno)", points: "", badgeType: "" },
  { index: 5, text: "Resultados de las operaciones de control realizadas", points: "", badgeType: "" },
  { index: 6, text: "Preservación y cuidado de los recursos y bienes bajo su responsabilidad", points: "", badgeType: "" },
  { index: 7, text: "Cumplimiento de las normas y procedimientos establecidos", points: "", badgeType: "" },
  { index: 8, text: "Contribución al cumplimiento del Programa de Calidad", points: "", badgeType: "" },
  { index: 9, text: "Nivel de satisfacción de los clientes", points: "", badgeType: "" },
  { index: 10, text: "Cumplimiento del Plan de Ventas", points: "", badgeType: "" },
  { index: 11, text: "Iniciativas", points: "", badgeType: "" },
  { index: 12, text: "Rapidez", points: "", badgeType: "" },
  { index: 13, text: "Gestión de Ventas", points: "", badgeType: "" },
  { index: 14, text: "Dominio de las funciones", points: "", badgeType: "" },
  { index: 15, text: "Conocimientos técnicos y profesionales", points: "", badgeType: "" },
  { index: 16, text: "Amabilidad y Cortesía", points: "", badgeType: "" },
  { index: 17, text: "Discreción", points: "", badgeType: "" },
  { index: 18, text: "Colaboración con los diferentes puestos y áreas", points: "", badgeType: "" },
  { index: 19, text: "Cumplimiento de las tareas asignadas", points: "", badgeType: "" },
  { index: 20, text: "Higiene y organización del puesto de trabajo", points: "", badgeType: "" },
  { index: 21, text: "Cumplimiento de las normas de seguridad y salud", points: "", badgeType: "" },
  { index: 22, text: "Uso del Idioma Extranjero", points: "", badgeType: "" },
  { index: 23, text: "Cumplimiento de las listas de chequeo", points: "", badgeType: "" },
  { index: 24, text: "Asistencia y puntualidad al trabajo", points: "", badgeType: "" },
  { index: 25, text: "Uso correcto del uniforme", points: "", badgeType: "" },
];

export function getSteps() {
  return steps.map((item) => (
    <h5>
      <CBadge color={"info"}>{item.index}</CBadge>
      {"  "}{item.text}
      <CBadge color={item.badgeType} className="float-right">
        <strong>{item.points}</strong>
      </CBadge>
    </h5>
  ))
}
