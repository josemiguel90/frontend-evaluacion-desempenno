import { CBadge } from "@coreui/react";
import { FaHotel } from "react-icons/all";
import { LinkContainer } from "react-router-bootstrap";
import { Tooltip } from "@material-ui/core";

export const columns = [
  {
    name: "name",
    label: "Nombre Completo",
    options: {
      filter: true,
      sort: false,
      filterType: "dropdown",
      customBodyRender: (value, tableMeta) => {
        return <strong>{value}</strong>;
      },
    },
  },
  {
    name: "hotel",
    label: "Hotel",
    options: {
      filter: true,
      sort: false,
      filterType: "dropdown",
      customBodyRender: (value, tableMeta) => {
        return (
          <div>
            <FaHotel
              size={18}
              color={"#3399ff"}
              className="c-sidebar-nav-icon"
            />
            &nbsp; {value}
          </div>
        );
      },
    },
  },
  // First Evaluation
  {
    name: "firstEvalTotal",
    label: "Última Evaluación",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        const text = tableMeta.rowData[4];
        const hotelId = tableMeta.rowData[14];
        const workerId = tableMeta.rowData[15];
        const fullName = tableMeta.rowData[0];
        const firstPayTimeId = tableMeta.rowData[24];
        const firstPayTimeName = tableMeta.rowData[25];
        const firstMeliaId = tableMeta.rowData[27];
        const firstGastronomyId = tableMeta.rowData[26];

        const urlAdd =
          firstPayTimeId === null
            ? "#"
            : `/evaluation/gastronomy/monthly/add/${hotelId}/${workerId}/${firstPayTimeId}`;
        const titleAdd =
          firstPayTimeId === null
            ? "El último mes de evaluación no está registrado"
            : `Realizar evaluación de Gastronomía a ${fullName} en ${firstPayTimeName}`;

        let colorBadge = "success";
        if (text !== null) {
          if (text.includes("MB")) colorBadge = "success";
          else {
            colorBadge = text.includes("M")
              ? "danger"
              : text.includes("B")
              ? "info"
              : text.includes("R")
              ? "warning"
              : "success";
          }
        }
        return (
          <div>
            {value ? (
              <LinkContainer
                to={`/evaluation/monthly/melia/show/${hotelId}/${workerId}/${firstPayTimeId}/${firstGastronomyId}/${firstMeliaId}`} /* Show Url */
              >
                <Tooltip
                  title={`Consultar evaluación de Melia a ${fullName} en ${firstPayTimeName}`}
                  placement="bottom"
                >
                  <h5 className="pointer">
                    <CBadge color={colorBadge}>{text}</CBadge>
                  </h5>
                </Tooltip>
              </LinkContainer>
            ) : (
              <LinkContainer to={urlAdd}>
                <Tooltip title={titleAdd} placement="bottom">
                  <h5 className="pointer">
                    <CBadge color={"danger"}>No Registrada</CBadge>
                  </h5>
                </Tooltip>
              </LinkContainer>
            )}
          </div>
        );
      },
    },
  },

  {
    name: "firstEvalDate",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "firstEvalCalification",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },

  // Second Evaluation
  {
    name: "secondEvalTotal",
    label: "Penúltima Evaluación",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        const text = tableMeta.rowData[7];
        const hotelId = tableMeta.rowData[14];
        const workerId = tableMeta.rowData[15];
        const fullName = tableMeta.rowData[0];
        const secondPayTimeId = tableMeta.rowData[20];
        const secondPayTimeName = tableMeta.rowData[21];
        const secondMeliaId = tableMeta.rowData[22];
        const secondGastronomyId = tableMeta.rowData[23];

        const urlAdd =
          secondPayTimeId === null
            ? "#"
            : `/evaluation/gastronomy/monthly/add/${hotelId}/${workerId}/${secondPayTimeId}`;
        const titleAdd =
          secondPayTimeId === null
            ? "El penúltimo mes de evaluación no está registrado"
            : `Realizar evaluación de Gastronomía a ${fullName} en ${secondPayTimeName}`;

        let colorBadge = "success";
        if (text !== null) {
          if (text.includes("MB")) colorBadge = "success";
          else {
            colorBadge = text.includes("M")
              ? "danger"
              : text.includes("B")
              ? "info"
              : text.includes("R")
              ? "warning"
              : "success";
          }
        }
        return (
          <div>
            {value ? (
              <LinkContainer
                to={`/evaluation/monthly/melia/show/${hotelId}/${workerId}/${secondPayTimeId}/${secondGastronomyId}/${secondMeliaId}`} /* Show Url */
              >
                <Tooltip
                  title={`Consultar evaluación de Melia a ${fullName} en ${secondPayTimeName}`}
                  placement="bottom"
                >
                  <h5 className="pointer">
                    <CBadge color={colorBadge}>{text}</CBadge>
                  </h5>
                </Tooltip>
              </LinkContainer>
            ) : (
              <LinkContainer to={urlAdd}>
                <Tooltip title={titleAdd} placement="bottom">
                  <h5 className="pointer">
                    <CBadge color={"danger"}>No Registrada</CBadge>
                  </h5>
                </Tooltip>
              </LinkContainer>
            )}
          </div>
        );
      },
    },
  },

  {
    name: "secondEvalDate",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "secondEvalCalification",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },

  // Third Evaluation
  {
    name: "thirdEvalTotal",
    label: "Antepenúltima Evaluación",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        const text = tableMeta.rowData[10];
        const hotelId = tableMeta.rowData[14];
        const workerId = tableMeta.rowData[15];
        const fullName = tableMeta.rowData[0];
        const thirdPayTimeId = tableMeta.rowData[16];
        const thirdPayTimeName = tableMeta.rowData[17];
        const thirdMeliaId = tableMeta.rowData[18];
        const thirdGastronomyId = tableMeta.rowData[19];

        const urlAdd =
          thirdPayTimeId === null
            ? "#"
            : `/evaluation/gastronomy/monthly/add/${hotelId}/${workerId}/${thirdPayTimeId}`;
        const titleAdd =
          thirdPayTimeId === null
            ? "El antepenúltimo mes de evaluación no está registrado"
            : `Realizar evaluación de Gastronomía a ${fullName} en ${thirdPayTimeName}`;

        let colorBadge = "success";
        if (text !== null) {
          if (text.includes("MB")) colorBadge = "success";
          else {
            colorBadge = text.includes("M")
              ? "danger"
              : text.includes("B")
              ? "info"
              : text.includes("R")
              ? "warning"
              : "success";
          }
        }
        return (
          <div>
            {value ? (
              <LinkContainer
                to={`/evaluation/monthly/melia/show/${hotelId}/${workerId}/${thirdPayTimeId}/${thirdGastronomyId}/${thirdMeliaId}`} /* Show Url */
              >
                <Tooltip
                  title={`Consultar evaluación de Melia a ${fullName} en ${thirdPayTimeName}`}
                  placement="bottom"
                >
                  <h5 className="pointer">
                    <CBadge color={colorBadge}>{text}</CBadge>
                  </h5>
                </Tooltip>
              </LinkContainer>
            ) : (
              <LinkContainer to={urlAdd}>
                <Tooltip title={titleAdd} placement="bottom">
                  <h5 className="pointer">
                    <CBadge color={"danger"}>No Registrada</CBadge>
                  </h5>
                </Tooltip>
              </LinkContainer>
            )}
          </div>
        );
      },
    },
  },

  {
    name: "thirdEvalDate",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "thirdEvalCalification",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  // Filters
  {
    name: "firstcalificacion",
    label: "Última Evaluación",
    options: {
      filter: true,
      filterType: "dropdown",
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "secondcalificacion",
    label: "Penúltima Evaluación",
    options: {
      filter: true,
      filterType: "dropdown",
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "thirdcalificacion",
    label: "Antepenúltima Evaluación",
    options: {
      filter: true,
      filterType: "dropdown",
      display: false,
      viewColumns: false,
    },
  },

  // IDS
  {
    name: "hotelId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "workerId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "thirdPayTimeId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "thirdPayTimeName",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "thirdMeliaId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "thirdGastronomyId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "secondPayTimeId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "secondPayTimeName",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "secondMeliaId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "secondGastronomyId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "firstPayTimeId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "firstPayTimeName",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "firstGastronomyId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "firstEvalId",
    label: "",
    options: {
      filter: false,
      display: false,
      viewColumns: false,
    },
  },
];
