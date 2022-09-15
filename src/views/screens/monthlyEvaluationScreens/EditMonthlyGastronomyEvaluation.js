import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Actions
import { setSnackbar } from "src/redux/reducers/snackbarReducer";
import { getHotelDetails } from "src/redux/actions/hotelActions";
import { getPayTimeDetails } from "src/redux/actions/payTimesActions";
import {
  getWorkerDetails,
  getEvaluatorDetails,
} from "src/redux/actions/workerActions";
import {
  getMonthlyGastronomyEvaluationDetails,
  editMonthlyGastronomyEvaluation,
} from "src/redux/actions/monthlyEvaluationActions";
// Constants
import { HOTEL_DETAILS_RESET } from "src/redux/constants/hotelConstants";
import { PAYTIMES_DETAILS_RESET } from "src/redux/constants/payTimesConstants";
import {
  WORKER_MONTHLY_EVALUATION_DETAILS_RESET,
  WORKER_MONTHLY_EVALUATION_EDIT_RESET,
} from "src/redux/constants/monthlyEvaluationConstants";
import {
  WORKER_DETAILS_RESET,
  WORKER_EVALUATOR_DETAILS_RESET,
} from "src/redux/constants/workerConstants";
// Components
import { Message, SrollDownButtom, Loader } from "src/containers/utils/index";
import GoBackButtonListHeader from "src/containers/utils/GoBackButtonListHeader";
import FormEvaluation from "./options/FormEvaluation";
import EvaluatorContent from "./options/EvaluatorContent";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import ErrorEditModal from "./options/ErrorEditModal";
import {
  redirectLogin,
  tokenhasExpired,
} from "src/containers/utils/userloginsettings.js";

function EditMonthlyGastronomyEvaluation({ match, history }) {
  const dispatch = useDispatch();
  const hotelId = match.params.hotelId;
  const workerId = match.params.workerId;
  const payTimeId = match.params.payTimeId;
  const evalId = match.params.evalId;

  // My States
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [differenceDays, setDifferenceDays] = useState(0);
  const [evalDate, setEvalDate] = useState("");

  // User Login Selector
  const { userInfo } = useSelector((state) => state.userLogin);

  // Hotel Details Selector
  const { error: errorHotel, hotel } = useSelector(
    (state) => state.hotelDetails
  );

  // Worker Details Selector
  const { error: errorWorker, worker } = useSelector(
    (state) => state.workerDetails
  );

  // Pay Time Details
  const { error: errorPayTime, payTime } = useSelector(
    (state) => state.payTimesDetails
  );

  // Evaluator Details
  const { error: errorEvaluator, evaluator } = useSelector(
    (state) => state.evaluatorDetails
  );

  // Monthly Gastronomy Evaluation Details Selector
  const {
    loading: loadingDetails,
    error: errorDetails,
    monthlyGastronomyEvaluation,
  } = useSelector((state) => state.monthlyEvaluationDetails);

  // Edit Evaluation Selector
  const {
    loading: loadingEdit,
    error: errorEdit,
    success: successEdit,
  } = useSelector((state) => state.monthlyEvaluationEdit);

  if (!showErrorModal && monthlyGastronomyEvaluation) {
    const evalDate = new Date(
      monthlyGastronomyEvaluation.evaluationDate
    ).getTime();
    const actualDate = new Date().getTime();
    const diff = actualDate - evalDate;
    const daysDiff = parseInt(diff / (1000 * 60 * 60 * 24));
    if (daysDiff !== null && daysDiff >= 30) {
      setEvalDate(monthlyGastronomyEvaluation.evaluationDate);
      setDifferenceDays(daysDiff);
      setShowErrorModal(true);
    }
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
        const message =
          "Evaluación Mensual de Gastronomía editada satisfactoriamente. Se ha actualizado la Evaluación de Melia";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: WORKER_MONTHLY_EVALUATION_EDIT_RESET });
        history.push(`/evaluations/monthly/${hotelId}`);
      }
      if (hotelId) {
        dispatch(getHotelDetails(hotelId, true));
      }
      if (workerId) {
        dispatch(getWorkerDetails(workerId));
      }
      if (payTimeId) {
        dispatch(getPayTimeDetails(payTimeId));
      }
      if (evalId) {
        dispatch(getMonthlyGastronomyEvaluationDetails(evalId));
      }
      dispatch(getEvaluatorDetails());
    }
    return () => {
      dispatch({ type: WORKER_DETAILS_RESET });
      dispatch({ type: HOTEL_DETAILS_RESET });
      dispatch({ type: PAYTIMES_DETAILS_RESET });
      dispatch({ type: WORKER_EVALUATOR_DETAILS_RESET });
      dispatch({ type: WORKER_MONTHLY_EVALUATION_DETAILS_RESET });
      dispatch({ type: WORKER_MONTHLY_EVALUATION_EDIT_RESET });
    };
  }, [
    userInfo,
    hotelId,
    dispatch,
    history,
    workerId,
    payTimeId,
    evalId,
    successEdit,
  ]);

  const onSubmitEvaluation = (items) => {
    const params = {
      evalId,
      payTimeId,
      evaluateWorkerId: workerId,
      evaluatorWorkerId: evaluator?.no_interno,
      evaluations: items,
    };
    dispatch(editMonthlyGastronomyEvaluation(params));
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    history.push(`/evaluations/monthly/${hotelId}`);
  };

  return (
    <React.Fragment>
      {loadingDetails ? (
        <Loader />
      ) : errorDetails ? (
        <Message variant="danger">{errorDetails}</Message>
      ) : (
        monthlyGastronomyEvaluation && (
          <React.Fragment>
            <ErrorEditModal
              showModal={showErrorModal}
              closeModal={closeErrorModal}
              evalDate={evalDate}
              differenceDays={differenceDays}
              workerName={worker?.nombreCompleto}
              evalType={"Gastronomía"}
            />
            {loadingEdit && <Loader />}
            {errorHotel && <Message variant="danger">{errorHotel}</Message>}
            {errorWorker && <Message variant="danger">{errorWorker}</Message>}
            {errorPayTime && <Message variant="danger">{errorPayTime}</Message>}
            {errorEdit && <Message variant="danger">{errorEdit}</Message>}
            {errorEvaluator && (
              <Message variant="danger">{errorEvaluator}</Message>
            )}

            <h3 className="text-muted text-center mb-2">{hotel?.name}</h3>

            <CCard className="shadow">
              <CCardHeader>
                <CRow>
                  <CCol xs="12" sm="8" md="8">
                    <h4 className="text-muted">
                      Editar Evaluación Mensual de Gastronomía
                    </h4>
                  </CCol>
                  <CCol xs="12" sm="4" md="4">
                    <div className="card-header-actions">
                      <GoBackButtonListHeader
                        link={`/evaluations/monthly/${hotelId}`}
                        title={`Volver al Listado de Evaluaciones Mensuales del ${hotel?.name}`}
                      />
                    </div>
                  </CCol>
                </CRow>
              </CCardHeader>

              <CCardBody>
                <EvaluatorContent
                  worker={worker}
                  payTime={payTime}
                  evaluator={evaluator}
                  dateCreation={monthlyGastronomyEvaluation.evaluationDate}
                />

                <CCardFooter>
                  <div className="text-center mb-n3">
                    <SrollDownButtom />
                  </div>
                </CCardFooter>
              </CCardBody>
            </CCard>

            <FormEvaluation
              onSubmitEvaluation={onSubmitEvaluation}
              monthlyGastronomyEvaluation={monthlyGastronomyEvaluation}
              canPrint={false}
            />
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
}

export default EditMonthlyGastronomyEvaluation;
