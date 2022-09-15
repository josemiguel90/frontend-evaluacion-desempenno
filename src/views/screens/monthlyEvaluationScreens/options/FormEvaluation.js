import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "src/redux/reducers/snackbarReducer";
import { Message } from "src/containers/utils/index";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { getSteps, steps } from "./steps";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CBadge,
} from "@coreui/react";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
} from "@material-ui/core";

function FormEvaluation({
  onSubmitEvaluation,
  monthlyGastronomyEvaluation,
  canPrint,
}) {
  const dispatch = useDispatch();
  const maxSteps = 25;
  const [activeStep, setActiveStep] = useState(0);
  const [actualEvaluation, setActualEvaluation] = useState("");
  const [evaluatedSteps, setEvaluatedSteps] = useState([]);
  const [actualVariant, setActualVariant] = useState("info");
  const [showSelectError, setShowSelectError] = useState(false);
  const [showDefaultEvaluation, setShowDefaultEvaluation] = useState(true);
  const [index1, setIndex1] = useState("");
  const [index2, setIndex2] = useState("");
  const [index3, setIndex3] = useState("");
  const [index4, setIndex4] = useState("");
  const [index5, setIndex5] = useState("");
  const [index6, setIndex6] = useState("");
  const [index7, setIndex7] = useState("");
  const [index8, setIndex8] = useState("");
  const [index9, setIndex9] = useState("");
  const [index10, setIndex10] = useState("");
  const [index11, setIndex11] = useState("");
  const [index12, setIndex12] = useState("");
  const [index13, setIndex13] = useState("");
  const [index14, setIndex14] = useState("");
  const [index15, setIndex15] = useState("");
  const [index16, setIndex16] = useState("");
  const [index17, setIndex17] = useState("");
  const [index18, setIndex18] = useState("");
  const [index19, setIndex19] = useState("");
  const [index20, setIndex20] = useState("");
  const [index21, setIndex21] = useState("");
  const [index22, setIndex22] = useState("");
  const [index23, setIndex23] = useState("");
  const [index24, setIndex24] = useState("");
  const [index25, setIndex25] = useState("");

  const getEval = (value) => {
    return value === 2 ? "M" : value === 3 ? "R" : value === 4 ? "B" : "MB";
  };

  useEffect(() => {
    if (monthlyGastronomyEvaluation !== null) {
      const mge = monthlyGastronomyEvaluation;
      setIndex1(`1|${mge.ind1_CDRI}|${getEval(mge.ind1_CDRI)}`);
      setIndex2(`2|${mge.ind2_AMD}|${getEval(mge.ind2_AMD)}`);
      setIndex3(`3|${mge.ind3_PAPPI}|${getEval(mge.ind3_PAPPI)}`);
      setIndex4(`4|${mge.ind4_CEDP}|${getEval(mge.ind4_CEDP)}`);
      setIndex5(`5|${mge.ind5_ROCR}|${getEval(mge.ind5_ROCR)}`);
      setIndex6(`6|${mge.ind6_PCRBBRC}|${getEval(mge.ind6_PCRBBRC)}`);
      setIndex7(`7|${mge.ind7_CNPE}|${getEval(mge.ind7_CNPE)}`);
      setIndex8(`8|${mge.ind8_CCPC}|${getEval(mge.ind8_CCPC)}`);
      setIndex9(`9|${mge.ind9_NSC}|${getEval(mge.ind9_NSC)}`);
      setIndex10(`10|${mge.ind10_CPI}|${getEval(mge.ind10_CPI)}`);
      setIndex11(`11|${mge.ind11_INI}|${getEval(mge.ind11_INI)}`);
      setIndex12(`12|${mge.ind12_RAP}|${getEval(mge.ind12_RAP)}`);
      setIndex13(`13|${mge.ind13_GV}|${getEval(mge.ind13_GV)}`);
      setIndex14(`14|${mge.ind14_DF}|${getEval(mge.ind14_DF)}`);
      setIndex15(`15|${mge.ind15_CTP}|${getEval(mge.ind15_CTP)}`);
      setIndex16(`16|${mge.ind16_AC}|${getEval(mge.ind16_AC)}`);
      setIndex17(`17|${mge.ind17_DIS}|${getEval(mge.ind17_DIS)}`);
      setIndex18(`18|${mge.ind18_CDPA}|${getEval(mge.ind18_CDPA)}`);
      setIndex19(`19|${mge.ind19_CTA}|${getEval(mge.ind19_CTA)}`);
      setIndex20(`20|${mge.ind20_HOPT}|${getEval(mge.ind20_HOPT)}`);
      setIndex21(`21|${mge.ind21_CNSS}|${getEval(mge.ind21_CNSS)}`);
      setIndex22(`22|${mge.ind22_UIE}|${getEval(mge.ind22_UIE)}`);
      setIndex23(`23|${mge.ind23_LCH}|${getEval(mge.ind23_LCH)}`);
      setIndex24(`24|${mge.ind24_APAT}|${getEval(mge.ind24_APAT)}`);
      setIndex25(`25|${mge.ind25_UCU}|${getEval(mge.ind25_UCU)}`);

      const arrayValues = [
        `1|${mge.ind1_CDRI}|${getEval(mge.ind1_CDRI)}`,
        `2|${mge.ind2_AMD}|${getEval(mge.ind2_AMD)}`,
        `3|${mge.ind3_PAPPI}|${getEval(mge.ind3_PAPPI)}`,
        `4|${mge.ind4_CEDP}|${getEval(mge.ind4_CEDP)}`,
        `5|${mge.ind5_ROCR}|${getEval(mge.ind5_ROCR)}`,
        `6|${mge.ind6_PCRBBRC}|${getEval(mge.ind6_PCRBBRC)}`,
        `7|${mge.ind7_CNPE}|${getEval(mge.ind7_CNPE)}`,
        `8|${mge.ind8_CCPC}|${getEval(mge.ind8_CCPC)}`,
        `9|${mge.ind9_NSC}|${getEval(mge.ind9_NSC)}`,
        `10|${mge.ind10_CPI}|${getEval(mge.ind10_CPI)}`,
        `11|${mge.ind11_INI}|${getEval(mge.ind11_INI)}`,
        `12|${mge.ind12_RAP}|${getEval(mge.ind12_RAP)}`,
        `13|${mge.ind13_GV}|${getEval(mge.ind13_GV)}`,
        `14|${mge.ind14_DF}|${getEval(mge.ind14_DF)}`,
        `15|${mge.ind15_CTP}|${getEval(mge.ind15_CTP)}`,
        `16|${mge.ind16_AC}|${getEval(mge.ind16_AC)}`,
        `17|${mge.ind17_DIS}|${getEval(mge.ind17_DIS)}`,
        `18|${mge.ind18_CDPA}|${getEval(mge.ind18_CDPA)}`,
        `19|${mge.ind19_CTA}|${getEval(mge.ind19_CTA)}`,
        `20|${mge.ind20_HOPT}|${getEval(mge.ind20_HOPT)}`,
        `21|${mge.ind21_CNSS}|${getEval(mge.ind21_CNSS)}`,
        `22|${mge.ind22_UIE}|${getEval(mge.ind22_UIE)}`,
        `23|${mge.ind23_LCH}|${getEval(mge.ind23_LCH)}`,
        `24|${mge.ind24_APAT}|${getEval(mge.ind24_APAT)}`,
        `25|${mge.ind25_UCU}|${getEval(mge.ind25_UCU)}`,
      ];

      arrayValues.forEach((value) => {
        const split = value.split("|");
        let newEvaluatedSteps = evaluatedSteps;
        let exist1 = false;
        newEvaluatedSteps.forEach((item, i) => {
          if (i === Number(split[0]) - 1) {
            exist1 = true;
            item.points = Number(split[1]);
            item.index = Number(split[0]);
            item.eval = split[2];
          }
        });
        if (!exist1) {
          newEvaluatedSteps.push({
            points: Number(split[1]),
            index: Number(split[0]),
            eval: split[2],
          });
        }
        setEvaluatedSteps(newEvaluatedSteps);
        steps[Number(split[0]) - 1].points = `${Number(split[1])} - ${
          split[2]
        }`;
        steps[Number(split[0]) - 1].badgeType = getBadgeVariant(split[2]);

        const evalSteps = evaluatedSteps.length;
        let count = 0;
        evaluatedSteps.forEach((item) => (count += item.points));
        const average = (count / evalSteps).toFixed(2);
        let finalEval =
          average <= 2
            ? "B"
            : average > 2 && average <= 3
            ? "R"
            : average > 3 && average <= 4
            ? "B"
            : "MB";
        setActualVariant(getBadgeVariant(finalEval));
        setActualEvaluation(`${average} - ${finalEval}`);
      });
    }
  }, [monthlyGastronomyEvaluation, evaluatedSteps]);

  const handleNext = () => {
    let exist1 = false;
    evaluatedSteps.forEach((item, index) => {
      if (index === activeStep) exist1 = true;
    });
    if (!exist1) {
      setShowSelectError(true);
    } else {
      setShowSelectError(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    onSubmitEvaluation(evaluatedSteps);
  };

  const handleClick = (index) => () => {
    setShowSelectError(false);
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    setActiveStep(index);
  };

  const updateEvaluatedSteps = (value) => {
    const split = value.split("|");
    let newEvaluatedSteps = evaluatedSteps;
    let exist1 = false;
    newEvaluatedSteps.forEach((item, i) => {
      if (i === Number(split[0]) - 1) {
        exist1 = true;
        item.points = Number(split[1]);
        item.index = Number(split[0]);
        item.eval = split[2];
      }
    });
    if (!exist1) {
      newEvaluatedSteps.push({
        points: Number(split[1]),
        index: Number(split[0]),
        eval: split[2],
      });
    }
    setEvaluatedSteps(newEvaluatedSteps);
    steps[Number(split[0]) - 1].points = `${Number(split[1])} - ${split[2]}`;
    steps[Number(split[0]) - 1].badgeType = getBadgeVariant(split[2]);
    updateActualEvaluation();
  };

  const getBadgeVariant = (evaluation) => {
    return evaluation === "MB"
      ? "success"
      : evaluation === "B"
      ? "info"
      : evaluation === "R"
      ? "warning"
      : "danger";
  };

  const updateActualEvaluation = () => {
    const evalSteps = evaluatedSteps.length;
    let count = 0;
    evaluatedSteps.forEach((item) => (count += item.points));
    const average = (count / evalSteps).toFixed(2);
    let finalEval =
      average <= 2
        ? "M"
        : average > 2 && average <= 3
        ? "R"
        : average > 3 && average <= 4
        ? "B"
        : "MB";
    setActualVariant(getBadgeVariant(finalEval));
    setActualEvaluation(`${average} - ${finalEval}`);
  };

  const handleDefaultEval = () => {
    setShowDefaultEvaluation(false);

    setIndex1(`1|4|B`);
    setIndex2(`2|4|B`);
    setIndex3(`3|4|B`);
    setIndex4(`4|4|B`);
    setIndex5(`5|4|B`);
    setIndex6(`6|4|B`);
    setIndex7(`7|4|B`);
    setIndex8(`8|4|B`);
    setIndex9(`9|4|B`);
    setIndex10(`10|4|B`);
    setIndex11(`11|4|B`);
    setIndex12(`12|4|B`);
    setIndex13(`13|4|B`);
    setIndex14(`14|4|B`);
    setIndex15(`15|4|B`);
    setIndex16(`16|4|B`);
    setIndex17(`17|4|B`);
    setIndex18(`18|4|B`);
    setIndex19(`19|4|B`);
    setIndex20(`20|4|B`);
    setIndex21(`21|4|B`);
    setIndex22(`22|4|B`);
    setIndex23(`23|4|B`);
    setIndex24(`24|4|B`);
    setIndex25(`25|4|B`);

    const arrayValues = [
      `1|4|B`,
      `2|4|B`,
      `3|4|B`,
      `4|4|B`,
      `5|4|B`,
      `6|4|B`,
      `7|4|B`,
      `8|4|B`,
      `9|4|B`,
      `10|4|B`,
      `11|4|B`,
      `12|4|B`,
      `13|4|B`,
      `14|4|B`,
      `15|4|B`,
      `16|4|B`,
      `17|4|B`,
      `18|4|B`,
      `19|4|B`,
      `20|4|B`,
      `21|4|B`,
      `22|4|B`,
      `23|4|B`,
      `24|4|B`,
      `25|4|B`,
    ];

    arrayValues.forEach((value) => {
      const split = value.split("|");
      let newEvaluatedSteps = evaluatedSteps;
      let exist1 = false;
      newEvaluatedSteps.forEach((item, i) => {
        if (i === Number(split[0]) - 1) {
          exist1 = true;
          item.points = Number(split[1]);
          item.index = Number(split[0]);
          item.eval = split[2];
        }
      });
      if (!exist1) {
        newEvaluatedSteps.push({
          points: Number(split[1]),
          index: Number(split[0]),
          eval: split[2],
        });
      }
      setEvaluatedSteps(newEvaluatedSteps);
      steps[Number(split[0]) - 1].points = `${Number(split[1])} - ${split[2]}`;
      steps[Number(split[0]) - 1].badgeType = getBadgeVariant(split[2]);

      const evalSteps = evaluatedSteps.length;
      let count = 0;
      evaluatedSteps.forEach((item) => (count += item.points));
      const average = (count / evalSteps).toFixed(2);
      let finalEval =
        average <= 2
          ? "B"
          : average > 2 && average <= 3
          ? "R"
          : average > 3 && average <= 4
          ? "B"
          : "MB";
      setActualVariant(getBadgeVariant(finalEval));
      setActualEvaluation(`${average} - ${finalEval}`);
    });

    setActiveStep(24);
    const message =
      "Evaluación establecida con B por defecto. Confirme los datos";
    dispatch(setSnackbar(true, "info", message));
  };

  return (
    <React.Fragment>
      <h4 className="text-center text-muted mb-3">
        Evaluación hasta el momento:{" "}
        {actualEvaluation === "" ? (
          "Nada todavía"
        ) : (
          <CBadge color={actualVariant}>{actualEvaluation}</CBadge>
        )}
      </h4>

      {!canPrint && showDefaultEvaluation && (
        <div className="text-center mb-3">
          <Button variant="contained" onClick={handleDefaultEval}>
            Definir Evaluación por defecto de{" "}
            <h5>
              <CBadge color="info" className="ml-2 mt-1">
                B
              </CBadge>
            </h5>
          </Button>
        </div>
      )}

      <CCard className="shadow">
        <CCardHeader>{getSteps()[activeStep]}</CCardHeader>
        <CCardBody>
          {showSelectError && (
            <Message variant="danger">Debes seleccionar una opción</Message>
          )}

          {activeStep === 0 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index1}
                onChange={(e) => {
                  setIndex1(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"1|2|M"}
                      control={<Radio />}
                      label={
                        "Haber incurrido como mínimo en 2 infracciones de la disciplina laboral"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"1|3|R"}
                      control={<Radio />}
                      label={
                        "Haber incurrido en 1 infracción de la disciplina laboral."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"1|4|B"}
                      control={<Radio />}
                      label={
                        "No ha cometido ninguna violación de la disciplina laboral."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"1|5|MB"}
                      control={<Radio />}
                      label={"Se destaca por su excelente disciplina"}
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 1 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index2}
                onChange={(e) => {
                  setIndex2(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"2|2|M"}
                      control={<Radio />}
                      label={"Contar con al menos una medida disciplinaria"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"2|3|R"}
                      control={<Radio />}
                      label={"No procede."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"2|4|B"}
                      control={<Radio />}
                      label={
                        "Haber incurrido en 1 infracción de la disciplina laboral"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"2|5|MB"}
                      control={<Radio />}
                      label={"No ha sido objeto de ningún señalamiento"}
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 2 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index3}
                onChange={(e) => {
                  setIndex3(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"3|2|M"}
                      control={<Radio />}
                      label={"Se ausentó a las actividades del PPI."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"3|3|R"}
                      control={<Radio />}
                      label={"Se ausentó a la guardia obrera."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"3|4|B"}
                      control={<Radio />}
                      label={"Participa en todas las actividades del PPI."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"3|5|MB"}
                      control={<Radio />}
                      label={
                        "Participa activamente en todas las actividades del PPI y la guardia obrera"
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 3 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index4}
                onChange={(e) => {
                  setIndex4(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"4|2|M"}
                      control={<Radio />}
                      label={
                        "Con tachaduras, borrones y al menos un error contable"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"4|3|R"}
                      control={<Radio />}
                      label={
                        "Sin tachaduras y borrones pero al menos un error contable."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"4|4|B"}
                      control={<Radio />}
                      label={"Sin tachaduras, borrones y errores contables."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"4|5|MB"}
                      control={<Radio />}
                      label={
                        "Documentación primaria con excelente presentación y contenido"
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 4 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index5}
                onChange={(e) => {
                  setIndex5(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"5|2|M"}
                      control={<Radio />}
                      label={
                        "Detectadas al menos 2 deficiencias en los controles realizados"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"5|3|R"}
                      control={<Radio />}
                      label={
                        "Detectada al menos 1 deficiencia en los controles realizados."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"5|4|B"}
                      control={<Radio />}
                      label={
                        "No se le ha detectado ninguna deficiencia en los controles realizados."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"5|5|MB"}
                      control={<Radio />}
                      label={
                        "Con resultados satisfactorios en las operaciones de control realizadas"
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 5 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index6}
                onChange={(e) => {
                  setIndex6(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"6|2|M"}
                      control={<Radio />}
                      label={
                        "No es responsable en el cuidado y preservación de los recursos bajo su responsabilidad"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"6|3|R"}
                      control={<Radio />}
                      label={"No procede."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"6|4|B"}
                      control={<Radio />}
                      label={
                        "Es responsable en el cuidado y preservación de los recursos bajo su responsabilidad."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"6|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por su responsabilidad y preservación de los recursos y bienes bajo su responsabilidad"
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 6 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index7}
                onChange={(e) => {
                  setIndex7(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"7|2|M"}
                      control={<Radio />}
                      label={
                        "Realiza las tareas propias de su puesto de trabajo con insuficiente calidad y resultados"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"7|3|R"}
                      control={<Radio />}
                      label={
                        "En ocasiones algunas de las tareas correspondientes a su puesto de trabajo las realiza deficientemente."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"7|4|B"}
                      control={<Radio />}
                      label={
                        "Realiza las tareas correspondientes a su puesto de trabajo."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"7|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por el desempeño de sus tareas, realizándolas eficazmente con rapidez, habilidad y un excelente nivel de calidad"
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 7 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index8}
                onChange={(e) => {
                  setIndex8(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"8|2|M"}
                      control={<Radio />}
                      label={
                        "Es indiferente a las tareas relacionadas con la calidad"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"8|3|R"}
                      control={<Radio />}
                      label={
                        "Contribuye escasamente en las tareas del Programa de Calidad."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"8|4|B"}
                      control={<Radio />}
                      label={
                        "Cumple con las tareas del Programa y se preocupa por la calidad del servicio que presta."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"8|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por su activa participación en el cumplimiento del Programa de Calidad y con los estándares establecidos."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 8 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index9}
                onChange={(e) => {
                  setIndex9(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"9|2|M"}
                      control={<Radio />}
                      label={
                        "Se reciben al menos 2 quejas por parte de los clientes"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"9|3|R"}
                      control={<Radio />}
                      label={"Se recibe una queja por parte de los clientes."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"9|4|B"}
                      control={<Radio />}
                      label={"No se reciben quejas por parte de los clientes."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"9|5|MB"}
                      control={<Radio />}
                      label={
                        "No se reciben quejas, y sí reconocimientos o felicitaciones por parte de los clientes."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 9 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index10}
                onChange={(e) => {
                  setIndex10(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"10|2|M"}
                      control={<Radio />}
                      label={
                        "Incumplimiento de los planes de ventas en 59% o menos"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"10|3|R"}
                      control={<Radio />}
                      label={
                        "Cumplimiento de los planes de ventas entre el 60-85%."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"10|4|B"}
                      control={<Radio />}
                      label={
                        "Cumplimiento de los planes de ventas entre el 85-100%."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"10|5|MB"}
                      control={<Radio />}
                      label={"Sobrecumplimiento de los planes de ventas."}
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 10 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index11}
                onChange={(e) => {
                  setIndex11(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"11|2|M"}
                      control={<Radio />}
                      label={
                        "Ante situaciones imprevistas no es capaz de reaccionar demostrando inseguridad"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"11|3|R"}
                      control={<Radio />}
                      label={
                        "En ocasiones no reacciona correctamente ante situaciones imprevistas."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"11|4|B"}
                      control={<Radio />}
                      label={
                        "Ante situaciones imprevistas reacciona rápidamente aportando iniciativas adecuadas."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"11|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por su gran capacidad de reacción ante situaciones imprevistas, tiene mucha iniciativa."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 11 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index12}
                onChange={(e) => {
                  setIndex12(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"12|2|M"}
                      control={<Radio />}
                      label={
                        "Se demora excesivamente en la realización de sus funciones"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"12|3|R"}
                      control={<Radio />}
                      label={
                        "Existe demora en ocasiones para realizar sus funciones."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"12|4|B"}
                      control={<Radio />}
                      label={"Realiza sus funciones con rapidez y agilidad."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"12|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por la rapidez y calidad con que ejecuta sus funciones."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 12 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index13}
                onChange={(e) => {
                  setIndex13(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"13|2|M"}
                      control={<Radio />}
                      label={
                        "No promueve la venta de los servicios y opcionales"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"13|3|R"}
                      control={<Radio />}
                      label={
                        "Promueve esporádicamente la venta de los servicios y opcionales."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"13|4|B"}
                      control={<Radio />}
                      label={"Promueve la venta de los servicios y opcionales."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"13|5|MB"}
                      control={<Radio />}
                      label={"Promueve activamente los servicios y opcionales."}
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 13 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index14}
                onChange={(e) => {
                  setIndex14(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"14|2|M"}
                      control={<Radio />}
                      label={
                        "Domina insuficientemente sus funciones para poder desempeñar su trabajo correctamente"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"14|3|R"}
                      control={<Radio />}
                      label={
                        "Domina las funciones permitiéndole desarrollar su trabajo, pero carece de la profundidad necesaria para un correcto desempeño."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"14|4|B"}
                      control={<Radio />}
                      label={
                        "Domina sus funciones permitiéndole desarrollar su trabajo correctamente."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"14|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por el excelente dominio de sus funciones para desarrollar su trabajo de forma sobresaliente."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 14 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index15}
                onChange={(e) => {
                  setIndex15(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"15|2|M"}
                      control={<Radio />}
                      label={
                        "Posee insuficientes conocimientos técnicos profesionales para desarrollar su trabajo"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"15|3|R"}
                      control={<Radio />}
                      label={
                        "Posee los conocimientos técnicos profesionales básicos para desempeñar su trabajo, pero carece de la profundidad necesaria para su correcto desempeño."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"15|4|B"}
                      control={<Radio />}
                      label={
                        "Posee los conocimientos técnicos profesionales para desempeñar su trabajo correctamente"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"15|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por los amplios conocimientos técnicos profesionales que posee para un excelente desempeño de su trabajo."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 15 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index16}
                onChange={(e) => {
                  setIndex16(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"16|2|M"}
                      control={<Radio />}
                      label={"No es amable y cortés con el cliente"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"16|3|R"}
                      control={<Radio />}
                      label={
                        "En ocasiones no se muestra amable y cortés con los clientes."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"16|4|B"}
                      control={<Radio />}
                      label={"Atiende a los clientes con amabilidad y cortesía"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"16|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por su amabilidad y cortesía, ofreciéndole siempre una sonrisa al cliente."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 16 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index17}
                onChange={(e) => {
                  setIndex17(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"17|2|M"}
                      control={<Radio />}
                      label={"Usa indebidamente la información que maneja"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"17|3|R"}
                      control={<Radio />}
                      label={"No procede."}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"17|4|B"}
                      control={<Radio />}
                      label={
                        "Usa debidamente la información que maneja en su trabajo"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"17|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por el debido uso de información que maneja en su trabajo."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 17 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index18}
                onChange={(e) => {
                  setIndex18(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"18|2|M"}
                      control={<Radio />}
                      label={
                        "No trabaja suficientemente en equipo, predominan sus intereses individuales, no colabora con los objetivos del colectivo"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"18|3|R"}
                      control={<Radio />}
                      label={
                        "Colabora con los diferentes puestos y áreas pero predominan sus objetivos personales."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"18|4|B"}
                      control={<Radio />}
                      label={
                        "Trabaja en equipo, participa activamente en los objetivos del colectivo"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"18|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por promover, desarrollar y apoyar la colaboración con los diferentes puestos y áreas asumiendo como propios los objetivos del colectivo."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 18 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index19}
                onChange={(e) => {
                  setIndex19(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"19|2|M"}
                      control={<Radio />}
                      label={"Incumple con las tareas que le son asignadas"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"19|3|R"}
                      control={<Radio />}
                      label={
                        "En ocasiones incumple con las tareas que le son asignadas."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"19|4|B"}
                      control={<Radio />}
                      label={
                        "Cumple de forma correcta las tareas que le son asignadas"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"19|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por el cumplimiento de las tareas que le son asignadas aplicando la iniciativa, rapidez y responsabilidad."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 19 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index20}
                onChange={(e) => {
                  setIndex20(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"20|2|M"}
                      control={<Radio />}
                      label={
                        "Su puesto de trabajo está desorganizado y carece de higiene"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"20|3|R"}
                      control={<Radio />}
                      label={
                        "En ocasiones su puesto de trabajo está desorganizado y la higiene es deficiente."
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"20|4|B"}
                      control={<Radio />}
                      label={
                        "Mantiene correcta higiene y organización del puesto de trabajo"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"20|5|MB"}
                      control={<Radio />}
                      label={
                        "Su puesto de trabajo se destaca por estar organizado y con una excelente higiene."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 20 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index21}
                onChange={(e) => {
                  setIndex21(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"21|2|M"}
                      control={<Radio />}
                      label={
                        "Incumple las normas de seguridad y salud establecidas en su puesto de trabajo"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"21|3|R"}
                      control={<Radio />}
                      label={
                        "En ocasiones incumple con las normas de seguridad y salud"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"21|4|B"}
                      control={<Radio />}
                      label={"Cumple con todas las normas de seguridad y salud"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"21|5|MB"}
                      control={<Radio />}
                      label={
                        "Se destaca por el cumplimiento correcto de las normas de seguridad y salud."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 21 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index22}
                onChange={(e) => {
                  setIndex22(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"22|2|M"}
                      control={<Radio />}
                      label={
                        "No habla inglés y no se comunica como es debido con los clientes"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"22|3|R"}
                      control={<Radio />}
                      label={"Habla inglés con dificultad"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"22|4|B"}
                      control={<Radio />}
                      label={"Habla inglés fluido"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"22|5|MB"}
                      control={<Radio />}
                      label={"Habla más de 2 idiomas."}
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 22 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index23}
                onChange={(e) => {
                  setIndex23(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"23|2|M"}
                      control={<Radio />}
                      label={
                        "Aplica las guías de chequeo y cumple con el plan de higiene total diario del área en un 75% o menos"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"23|3|R"}
                      control={<Radio />}
                      label={
                        "Aplica las guías de chequeo y cumple con el plan de higiene total diario del área en más de un 75%"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"23|4|B"}
                      control={<Radio />}
                      label={
                        "Aplica las guías de chequeo y cumple con el plan de higiene total diario del área en más de un 85%"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"23|5|MB"}
                      control={<Radio />}
                      label={
                        "Aplica las guías de chequeo y cumple con el plan de higiene total diario del área en más de un 95%."
                      }
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 23 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index24}
                onChange={(e) => {
                  setIndex24(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"24|2|M"}
                      control={<Radio />}
                      label={"Ausencias justificadas reiteradas"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"24|3|R"}
                      control={<Radio />}
                      label={"Ha tenido más de una llegada tarde"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"24|4|B"}
                      control={<Radio />}
                      label={
                        "No ha tenido ausencias, pero ha llegado tarde una vez"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"24|5|MB"}
                      control={<Radio />}
                      label={"No tiene ausencias y siempre es puntual"}
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}

          {activeStep === 24 && (
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              disabled={canPrint}
            >
              <RadioGroup
                value={index25}
                onChange={(e) => {
                  setIndex25(e.target.value);
                  updateEvaluatedSteps(e.target.value);
                }}
              >
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="danger" className="mt-2">
                      M
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"25|2|M"}
                      control={<Radio />}
                      label={"Uso incorrecto del uniforme reiterado"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="warning" className="mt-2">
                      R
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"25|3|R"}
                      control={<Radio />}
                      label={
                        "Haber sido requerido por su jefe al menos una vez por el uso incorrecto del uniforme"
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="info" className="mt-2">
                      B
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"25|4|B"}
                      control={<Radio />}
                      label={"Usa correctamente el uniforme"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 text-center mr-n4 pt-1">
                    <CBadge color="success" className="mt-2">
                      MB
                    </CBadge>
                  </div>
                  <div className="col-md-11">
                    <FormControlLabel
                      value={"25|5|MB"}
                      control={<Radio />}
                      label={"Se destaca por su presencia personal"}
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          )}
        </CCardBody>
        <CCardFooter>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Siguiente
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Anterior
              </Button>
            }
          />
        </CCardFooter>
      </CCard>

      {!canPrint &&
        (activeStep === maxSteps || evaluatedSteps.length === maxSteps) && (
          <div className="text-center mb-4">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {monthlyGastronomyEvaluation === null
                ? "Terminar Evaluación"
                : "Editar Evaluación"}
            </Button>
          </div>
        )}

      {evaluatedSteps.length !== 0 && (
        <CCard className="shadow mt-2">
          <CCardHeader>
            <h5 className="text-center text-muted">
              Pasos evaluados del trabajador
            </h5>
          </CCardHeader>
          <CCardBody>
            <List component="nav" aria-label="secondary mailbox folder">
              {evaluatedSteps.map((label, index) => (
                <ListItem
                  key={index}
                  button
                  selected={activeStep === index}
                  onClick={handleClick(index)}
                >
                  <ListItemAvatar>
                    <CBadge color={"info"}>{label.index}</CBadge>
                  </ListItemAvatar>
                  <ListItemText primary={steps[index].text} />
                  <ListItemSecondaryAction>
                    <CBadge color={getBadgeVariant(label.eval)}>
                      <strong>{label.points}</strong> - {label.eval}
                    </CBadge>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </CCardBody>
        </CCard>
      )}
    </React.Fragment>
  );
}

export default FormEvaluation;
