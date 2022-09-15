import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import Logo from "../../assets/img/logo.png";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CCardHeader,
  CImg,
  CInvalidFeedback,
  CInputGroupAppend,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Loader, Message } from "src/containers/utils/index";
import * as yup from "yup";
import { useFormik } from "formik";

const Login = ({ location, history }) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const redirect = location.search ? location.search.split("=")[1] : "/";
  // Selectors
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  // Use Effect
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo, error]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .trim()
      .required("El nombre de usuario es obligatorio"),
    password: yup.string().trim().required("La contraseña es obligatoria"),
  });

  // Form with the initials values of the user
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (user) => {
      dispatch(login(user.username, user.password));
    },
  });

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCard className="p-4 shadow">
              <CCardHeader>
                <CRow>
                  <CCol md="6" className="text-center">
                    <CImg
                      src={Logo}
                      className="c-sidebar-brand-full"
                      alt="logo"
                      height={75}
                    />
                  </CCol>
                  <CCol md="6">
                    <h4 className="text-center ml-3 text-muted">
                      Sistema de Evaluación del Desempeño
                    </h4>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <CForm onSubmit={formik.handleSubmit}>
                  <h1 className="text-center">Autenticarse</h1>
                  <p className="text-muted text-center">
                    Rellena los campos requeridos
                  </p>

                  {error && <Message variant="danger">{error}</Message>}

                  {loading && <Loader />}

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Nombre de usuario"
                      value={formik.values.username}
                      invalid={Boolean(formik.errors.username)}
                      valid={
                        formik.touched.username &&
                        !Boolean(formik.errors.username)
                      }
                      onChange={formik.handleChange}
                    />
                    <CInvalidFeedback>
                      {formik.errors.username}
                    </CInvalidFeedback>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      value={formik.values.password}
                      invalid={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      valid={
                        formik.touched.password &&
                        !Boolean(formik.errors.password)
                      }
                      onChange={formik.handleChange}
                      autoComplete="new-password"
                    />
                    <CInputGroupAppend
                      onClick={() => setShowPassword(!showPassword)}
                      className="mt-1 ml-2"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </CInputGroupAppend>
                    <CInvalidFeedback className="help-block">
                      {formik.touched.password && formik.errors.password}
                    </CInvalidFeedback>
                  </CInputGroup>
                  <CButton
                    color="primary"
                    className="px-4 float-right"
                    type="submit"
                  >
                    Acceder
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
