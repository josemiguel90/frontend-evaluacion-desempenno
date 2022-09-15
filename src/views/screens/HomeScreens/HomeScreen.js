import React, { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Message } from "src/containers/utils";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import { CChartPie, CChartDoughnut } from "@coreui/react-chartjs";
import {
  RANGE_EVALUATION,
  ANUAL_EVALUATION,
  NUMBERS,
  TABLE_EVALUAIIONS,
} from "src/redux/constants/dashboardConstants";
import {
  getMainNumbers,
  getRangeEvaluation,
  getAnualRangeEvaluation,
  getTableEval,
} from "src/redux/actions/dashboardActions";
import {
  redirectLogin,
  tokenhasExpired,
} from "src/containers/utils/userloginsettings.js";

const WidgetsDropdown = lazy(() => import("../../widgets/WidgetsDropdown.js"));
const TableEvalInfo = lazy(() => import("./TableEvalInfo"));

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  // User Selector
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Numbers Selector
  const {
    users,
    salePlans,
    salePlaces,
    families,
    loading,
    error: errorNumbers,
  } = useSelector((state) => state.numbers);

  // Evaluation Range Selector
  const {
    loading: loadingEvaluations,
    error: errorEvaluations,
    evaluationRange,
  } = useSelector((state) => state.evaluationRange);

  // Evaluation Anual Range Selector
  const {
    loading: loadingAnualEvaluations,
    error: errorAnualEvaluations,
    evaluationRange: evaluationAnualRange,
  } = useSelector((state) => state.evaluationAnualRange);

  // Evaluation Table Selector
  const {
    loading: loadingTable,
    error: errorTable,
    evaluations: evaluationsTable,
    payTimes: lastPaytimes,
  } = useSelector((state) => state.evaluationTable);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (tokenhasExpired(userInfo)) {
        redirectLogin(history, dispatch);
      }
      dispatch(getMainNumbers());
      dispatch(getRangeEvaluation());
      dispatch(getAnualRangeEvaluation());
      dispatch(getTableEval());
    }
    return () => {
      dispatch({ type: NUMBERS.DATA_RESET });
      dispatch({ type: RANGE_EVALUATION.EVALUATIONS_RANGE_RESET });
      dispatch({ type: ANUAL_EVALUATION.EVALUATIONS_RANGE_RESET });
      dispatch({ type: TABLE_EVALUAIIONS.RESET });
    };
  }, [userInfo, history, dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : errorNumbers ? (
        <Message variant="danger">{errorNumbers}</Message>
      ) : (
        <WidgetsDropdown
          users={String(users)}
          salePlans={String(salePlans)}
          salePlaces={String(salePlaces)}
          families={String(families)}
        />
      )}

      <CCardGroup columns className="cols-2">
        {loadingAnualEvaluations ? (
          <Loader />
        ) : errorAnualEvaluations ? (
          <Message variant="danger">{errorAnualEvaluations}</Message>
        ) : (
          evaluationAnualRange && (
            <CCard className="shadow">
              <CCardHeader className="text-center">
                Rango de Evaluaciones Anuales
              </CCardHeader>
              <CCardBody>
                <CChartDoughnut
                  datasets={[
                    {
                      backgroundColor: ["#41B883", "#00D8FF", "#DD1B16"],
                      data: [
                        evaluationAnualRange.veryGood,
                        evaluationAnualRange.good,
                        evaluationAnualRange.bad,
                      ],
                    },
                  ]}
                  labels={["Superior", "Adecuado", "Deficiente"]}
                  options={{
                    tooltips: {
                      enabled: true,
                    },
                  }}
                />
              </CCardBody>
            </CCard>
          )
        )}

        <CCard className="shadow">
          {loadingEvaluations ? (
            <Loader />
          ) : errorEvaluations ? (
            <Message variant="danger">{errorEvaluations}</Message>
          ) : (
            evaluationRange && (
              <div>
                <CCardHeader className="text-center">
                  Rango de Evaluaciones Mensuales de Melia
                </CCardHeader>
                <CCardBody>
                  <CChartPie
                    datasets={[
                      {
                        backgroundColor: [
                          "#41B883",
                          "#00D8FF",
                          "#adff2f",
                          "#DD1B16",
                        ],
                        data: [
                          evaluationRange.veryGood,
                          evaluationRange.good,
                          evaluationRange.regular,
                          evaluationRange.bad,
                        ],
                      },
                    ]}
                    labels={["Muy Bien", "Bien", "Regular", "Mal"]}
                    options={{
                      tooltips: {
                        enabled: true,
                      },
                    }}
                  />
                </CCardBody>
              </div>
            )
          )}
        </CCard>
      </CCardGroup>

      {userInfo?.isFoodAndDrinkBoss && (
        <React.Fragment>
          {loadingTable ? (
            <Loader />
          ) : errorTable ? (
            <Message variant="danger">{errorTable}</Message>
          ) : (
            evaluationsTable && (
              <TableEvalInfo table={evaluationsTable} paytimes={lastPaytimes} />
            )
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HomeScreen;
