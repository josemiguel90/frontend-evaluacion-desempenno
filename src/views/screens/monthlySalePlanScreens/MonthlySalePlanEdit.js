import React, { useEffect, useState } from "react";
// Libraries
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { LinkContainer } from "react-router-bootstrap";
// Icons
import { FaDollarSign } from "react-icons/fa";
import CIcon from "@coreui/icons-react";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
// Components
import { BootstrapInput } from "./options/styles";
import { Loader, Message } from "src/containers/utils/index";
import GoBackButtonListHeader from "src/containers/utils/GoBackButtonListHeader";
// Actions
import { getHotelDetails } from "src/redux/actions/hotelActions";
import { getAnualPlanDetails } from "src/redux/actions/anualSalePlansActions";
import { getFamilyList } from "src/redux/actions/familyActions";
import { getSellAreaList } from "src/redux/actions/sellAreaActions";
import { setSnackbar } from "src/redux/reducers/snackbarReducer";
import {
  getMonthlySalePlanDetails,
  editMonthlySalePlans,
} from "src/redux/actions/monthlySalePlansActions";
// Constants
import { SELL_AREA_LIST_RESET } from "src/redux/constants/sellAreaConstants";
import { FAMILY_LIST_RESET } from "src/redux/constants/familyConstants";
import { HOTEL_DETAILS_RESET } from "src/redux/constants/hotelConstants";
import { ANUAL_SALE_PLAN_DETAILS_RESET } from "src/redux/constants/anuaSalePlanConstants";
import {
  MONTHLY_SALE_PLAN_CREATE_RESET,
  MONTHLY_SALE_PLAN_DETAILS_RESET,
  MONTHLY_SALE_PLAN_EDIT_RESET,
} from "src/redux/constants/monthlySalePlanConstants";
// Componets libraries
import {
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import {
  redirectLogin,
  tokenhasExpired,
} from "src/containers/utils/userloginsettings.js";

export const initialValues = {
  month: "",
  family: "",
  saleArea: "",
  plan: "",
};

export const validationSchema = yup.object({
  month: yup.string().required("El mes es obligatorio"),
  family: yup.number().required("La familia es obligatoria"),
  saleArea: yup.number().required("El punto de venta es obligatorio"),
  plan: yup
    .number()
    .required("El plan es obligatorio")
    .test(
      "Es positivo?",
      "El valor del plan no puede ser negativo!",
      (value) => value > 0
    ),
});

function MonthlySalePlanEdit({ match, history }) {
  const hotelId = match.params.hotelId;
  const anualSalePlanId = match.params.anualSalePlanId;
  const monthlySalePlanId = match.params.monthlySalePlanId;

  const dispatch = useDispatch();
  const [months] = useState([
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]);

  // User Login Selector
  const { userInfo } = useSelector((state) => state.userLogin);
  // Hotel Details Selector
  const { error: errorHotel, hotel } = useSelector(
    (state) => state.hotelDetails
  );
  // Monthly Sale Plan Selector
  const {
    loading: loadingMonthlySalePlan,
    error: errorMonthlySalePlan,
    monhtlySalePlan,
  } = useSelector((state) => state.monthlySalePlanDetails);
  // Sale Plan Details Selector
  const { error: errorAnualSale, anualSalePlan } = useSelector(
    (state) => state.anualSalePlanDetails
  );
  // family List Selector
  const {
    loading: loadingFamilies,
    error: errorFamily,
    families,
  } = useSelector((state) => state.familyList);
  // Sell Area List Selector
  const {
    loading: loadingAreas,
    error: errorArea,
    sellAreas,
  } = useSelector((state) => state.sellAreaList);
  // Monthly Sale Plan Edit Selector
  const {
    loading: loadingEdit,
    success: successEdit,
    error: errorEdit,
  } = useSelector((state) => state.monthlySalePlanEdit);

  // Initialize Values
  if (monhtlySalePlan) {
    initialValues.month = monhtlySalePlan?.month;
    initialValues.family = String(monhtlySalePlan?.family);
    initialValues.saleArea = String(monhtlySalePlan?.saleArea);
    initialValues.plan = monhtlySalePlan?.plan;
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isFoodAndDrinkBoss) {
      history.push("/403");
    } else {
      if (tokenhasExpired(userInfo)) {
        redirectLogin(history, dispatch);
      }
      if (successEdit) {
        const message = "Plan de Venta Mensual Editado satisfactoriamente";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: MONTHLY_SALE_PLAN_EDIT_RESET });
        history.push(`/monthlySalePlan/${hotelId}/list/${anualSalePlanId}`);
      }
      if (monthlySalePlanId) {
        dispatch(getMonthlySalePlanDetails(anualSalePlanId, monthlySalePlanId));
      }
      if (anualSalePlanId) {
        dispatch(getAnualPlanDetails(anualSalePlanId));
      }
      if (hotelId) {
        dispatch(getHotelDetails(hotelId, true));
      }
      dispatch(getFamilyList());
      dispatch(getSellAreaList(hotelId));
    }
    return () => {
      dispatch({ type: HOTEL_DETAILS_RESET });
      dispatch({ type: ANUAL_SALE_PLAN_DETAILS_RESET });
      dispatch({ type: SELL_AREA_LIST_RESET });
      dispatch({ type: FAMILY_LIST_RESET });
      dispatch({ type: MONTHLY_SALE_PLAN_CREATE_RESET });
      dispatch({ type: MONTHLY_SALE_PLAN_DETAILS_RESET });
      dispatch({ type: MONTHLY_SALE_PLAN_EDIT_RESET });
    };
  }, [
    dispatch,
    history,
    userInfo,
    hotelId,
    anualSalePlanId,
    monthlySalePlanId,
    successEdit,
  ]);

  // Form with the initials values of the user
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const params = {
        monthlySalePlanId,
        anualSalePlanId,
        month: values.month,
        familyId: values.family,
        saleAreaId: values.saleArea,
        plan: values.plan,
      };
      dispatch(editMonthlySalePlans(params));
    },
  });

  return (
    <React.Fragment>
      {loadingMonthlySalePlan && <Loader />}
      {loadingEdit && <Loader />}
      {errorMonthlySalePlan && (
        <Message variant="danger">{errorMonthlySalePlan}</Message>
      )}
      {errorHotel && <Message variant="danger">{errorHotel}</Message>}
      {errorAnualSale && <Message variant="danger">{errorAnualSale}</Message>}
      {errorFamily && <Message variant="danger">{errorFamily}</Message>}
      {errorArea && <Message variant="danger">{errorArea}</Message>}
      {errorEdit && <Message variant="danger">{errorEdit}</Message>}

      <CCard className="shadow">
        <CCardHeader>
          <CRow>
            <CCol xs="12" sm="8" md="10">
              <h4 className="text-muted">
                <FaDollarSign /> Editar Plan de Venta Mensual para el{" "}
                <strong>{hotel?.name}</strong> del año{" "}
                <strong>{anualSalePlan?.year}</strong>
              </h4>
            </CCol>
            <CCol xs="12" sm="4" md="2">
              <div className="card-header-actions">
                {/* RotateLeftIcon */}
                <Tooltip title={"Resetar Formulario"}>
                  <IconButton
                    onClick={() => {
                      formik.resetForm();
                      dispatch(
                        setSnackbar(true, "info", "Formulario Reseteado")
                      );
                    }}
                  >
                    <RotateLeftIcon />
                  </IconButton>
                </Tooltip>
                <GoBackButtonListHeader
                  title={`Volver al Listado de los planes de Venta Mensuales del ${hotel?.name}`}
                  link={`/monthlySalePlan/${hotelId}/list/${anualSalePlanId}`}
                />
              </div>
            </CCol>
          </CRow>
        </CCardHeader>

        <form onSubmit={formik.handleSubmit} className="m-3">
          <CCardBody>
            {/* MEs */}
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Mes</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <FormControl style={{ width: "100%" }}>
                  <Select
                    id="month"
                    name="month"
                    value={formik.values.month ? formik.values.month : ""}
                    onChange={formik.handleChange}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value="" disabled>
                      <em>Seleccione un Mes</em>
                    </MenuItem>
                    {months.map((item, index) => (
                      <MenuItem value={String(item)} key={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {Boolean(formik.touched.month) &&
                  Boolean(formik.errors.month) && (
                    <small className="text-red">{formik.errors.month}</small>
                  )}
              </CCol>
            </CFormGroup>

            {/* Familia */}
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Familia</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                {loadingFamilies ? (
                  <Loader />
                ) : (
                  families && (
                    <FormControl style={{ width: "100%" }}>
                      <Select
                        id="family"
                        name="family"
                        placeholder="Seleccione una Familia"
                        value={formik.values.family ? formik.values.family : ""}
                        onChange={formik.handleChange}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value="" disabled>
                          <em>Seleccione una Familia</em>
                        </MenuItem>
                        {families.map((item, index) => (
                          <MenuItem value={String(item.id_grupo)} key={index}>
                            {item.desc_grupo}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )
                )}
                {Boolean(formik.touched.family) &&
                  Boolean(formik.errors.family) && (
                    <small className="text-red">{formik.errors.family}</small>
                  )}
              </CCol>
            </CFormGroup>

            {/* AREA */}
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Punto de Venta</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                {loadingAreas ? (
                  <Loader />
                ) : (
                  sellAreas && (
                    <FormControl style={{ width: "100%" }}>
                      <Select
                        id="saleArea"
                        name="saleArea"
                        placeholder="Seleccione un Punto de Venta"
                        value={
                          formik.values.saleArea ? formik.values.saleArea : ""
                        }
                        onChange={formik.handleChange}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value="" disabled>
                          <em>Seleccione un Punto de Venta</em>
                        </MenuItem>
                        {sellAreas.map((item, index) => (
                          <MenuItem value={String(item.id_pvta)} key={index}>
                            {item.desc_pvta}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )
                )}
                {formik.touched.saleArea && Boolean(formik.errors.saleArea) && (
                  <small className="text-red">{formik.errors.saleArea}</small>
                )}
              </CCol>
            </CFormGroup>

            {/* Plan */}
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Plan de Venta</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="plan"
                  name="plan"
                  placeholder={"Escribe aquí el plan"}
                  type={"number"}
                  value={formik.values.plan ? formik.values.plan : ""}
                  onChange={formik.handleChange}
                />
                {formik.touched.plan && Boolean(formik.errors.plan) && (
                  <small className="text-red">{formik.errors.plan}</small>
                )}
              </CCol>
            </CFormGroup>
          </CCardBody>

          <CCardFooter>
            <div className="float-right">
              <LinkContainer
                to={`/monthlySalePlan/${hotelId}/list/${anualSalePlanId}`}
              >
                <CButton
                  variant="outline"
                  color="light"
                  type="button"
                  className="text-black-50"
                >
                  <CIcon name="cil-x" /> Cancelar
                </CButton>
              </LinkContainer>
              <CButton color="success" type="submit" className="ml-2">
                <CIcon name="cil-scrubber" /> Editar
              </CButton>
            </div>
          </CCardFooter>
        </form>
      </CCard>
    </React.Fragment>
  );
}

export default MonthlySalePlanEdit;
