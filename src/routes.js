import React from 'react';

const HomeScreen = React.lazy(() => import('./views/screens/HomeScreens/HomeScreen'));

// Users Components
const UserListScreen = React.lazy(() => import('./views/screens/usersScreens/UserListScreen'));
const UserAddScreen = React.lazy(() => import('./views/screens/usersScreens/UserAddScreen'));
const UserEditScreen = React.lazy(() => import('./views/screens/usersScreens/editScreens/UserEditScreen'));
const UserProfile = React.lazy(() => import('./views/screens/usersScreens/profileScreen/UserProfile'));

// Hotel Components
const HotelsList = React.lazy(() => import('./views/screens/hotelScreens/HotelListScreen'))
const HotelsAdd = React.lazy(() => import('./views/screens/hotelScreens/HotelAddScreen'))
const HotelsEdit = React.lazy(() => import('./views/screens/hotelScreens/HotelEditScreen'))

// Family Components
const FamilyListScreen = React.lazy(() => import('./views/screens/familyScreens/FamilyListScreen'))
const FamilyImportScreen = React.lazy(() => import('./views/screens/familyScreens/options/ImportFamilies'))

// Sell Area Components
const SellAreaList = React.lazy(() => import('./views/screens/sellAreaScreens/SellAreaList'))
const SellAreaImport = React.lazy(() => import('./views/screens/sellAreaScreens/SellAreaImport'))

// Coin Components
const CoinList = React.lazy(() => import('./views/screens/coinScreens/CoinList'));

// Workers Components
const WorkerList = React.lazy(() => import('./views/screens/workerScreens/WorkerList'));
const WorkerEditOperator = React.lazy(() => import('./views/screens/workerScreens/WorkerEditOperator'));
const ImportWorkerList = React.lazy(() => import('./views/screens/workerScreens/ImportWorkerList'));

// Charge Components
const ChargeList = React.lazy(() => import('./views/screens/chargesScreens/ChargeList'));
const CategoryList = React.lazy(() => import('./views/screens/categoryScreens/CategoryList'));

// Sell Plans Components
const SellAnualPlanList = React.lazy(() => import('./views/screens/sellPlanScreens/SellAnualPlanList'));
const SaleAnualPlanEdit = React.lazy(() => import('./views/screens/sellPlanScreens/SaleAnualPlanEdit'));
const SaleAnualPlanAdd = React.lazy(() => import('./views/screens/sellPlanScreens/SaleAnualPlanAdd'));

// Monthly Sale Plans Components 
const MonthlySalePlanList = React.lazy(() => import('./views/screens/monthlySalePlanScreens/MonthlySalePlanList'));
const MonthlySalePlanAdd = React.lazy(() => import('./views/screens/monthlySalePlanScreens/MonthlySalePlanAdd'));
const MonthlySalePlanEdit = React.lazy(() => import('./views/screens/monthlySalePlanScreens/MonthlySalePlanEdit'));

// Pay Times Components 
const PayTimeList = React.lazy(() => import('./views/screens/payTimesScreens/PayTimeList'))
const ImportPayTimes = React.lazy(() => import('./views/screens/payTimesScreens/ImportPayTimes'))

// Monthly Evaluation Components 

const ShowPerformanceBook = React.lazy(() => import('./views/screens/PerformanceBooksScreens/ShowPerformanceBook'))

const MonthlyEvaluationList = React.lazy(() => import('./views/screens/monthlyEvaluationScreens/MonthlyEvaluationList'))
const AddMonthlyGastronomyEvaluation = React.lazy(() => import('./views/screens/monthlyEvaluationScreens/AddMonthlyGastronomyEvaluation'))
const EditMonthlyGastronomyEvaluation = React.lazy(() => import('./views/screens/monthlyEvaluationScreens/EditMonthlyGastronomyEvaluation'))
const ShowMonthlyGastronomyEvaluation = React.lazy(() => import('./views/screens/monthlyEvaluationScreens/ShowMonthlyGastronomyEvaluation'))

// Monthly Melia Components
const EditMonthlyMeliaEvaluation = React.lazy(() => import('./views/screens/monthlyMeliaEvaluations/EditMonthlyMeliaEvaluation'))
const ShowMonthlyMeliaEvaluation = React.lazy(() => import('./views/screens/monthlyMeliaEvaluations/ShowMonthlyMeliaEvaluation'))

// Worker Incidents Components
const WorkerIncidents = React.lazy(() => import('./views/screens/incidentScreens/WorkerIncidents'))

// Anual Evaluation Components 
const AnualEvaluationsList = React.lazy(() => import('./views/screens/anualEvaluationScreens/AnualEvaluationsList'))
const AnualEvaluationAdd = React.lazy(() => import('./views/screens/anualEvaluationScreens/AnualEvaluationAdd'))
const AnualEvaluationEdit = React.lazy(() => import('./views/screens/anualEvaluationScreens/AnualEvaluationEdit'))
const AnualEvaluationShow = React.lazy(() => import('./views/screens/anualEvaluationScreens/AnualEvaluationShow'))

const routes = [
  // Public Routes
  { path: '/', exact: true, name: 'Casa' },
  { path: '/dashboard', name: 'Panel Administrativo', component: HomeScreen },

  // Users Urls
  { path: '/user/profile', name: 'Perfil de Usuario', component: UserProfile },
  { path: '/users/list', name: 'Listado de Usuarios', component: UserListScreen, exact: true},
  { path: '/users/list/add', name: 'Insertar Usuario', component: UserAddScreen },
  { path: "/users/list/edit/:id", name: 'Editar Usuario', component: UserEditScreen },

  // Hotel Routers
  { path: '/hotels', name: 'Listado de Hoteles', component: HotelsList, exact: true},
  { path: '/hotels/add', name: 'Insertar Hotel', component: HotelsAdd },
  { path: "/hotels/edit/:id", name: 'Editar Hotel', component: HotelsEdit },

  // Family Router
  { path: '/families', name: 'Listado de Familias', component: FamilyListScreen, exact: true},
  { path: '/families/import', name: 'Importe de Familias', component: FamilyImportScreen},

  // Sell Area Router 
  { path: '/sellArea/:id', name: 'Puntos de Ventas', component: SellAreaList, exact: true},
  { path: '/import/sellArea/:id', name: 'Importar Puntos de Ventas', component: SellAreaImport},

  // Coins 
  { path: '/coins', name: 'Moneda Base', component: CoinList},

  // Workers 
  { path: '/workers/:id', name: 'Trabajadores', component: WorkerList, exact: true},
  { path: '/operator/worker/:workerId/:hotelId', name: 'Selección de Operador', component: WorkerEditOperator},
  { path: '/import/workers/:id/', name: 'Importar Trabajadores', component: ImportWorkerList},

  // Charges
  { path: '/charges/', name: 'Cargos Disponibles', component: ChargeList},
  { path: '/categories/', name: 'Categorías Ocupacionales', component: CategoryList},

  // Sell Anual Plans
  { path: '/sellPlans/:id', name: 'Plan de Ventas', component: SellAnualPlanList, exact: true},
  { path: '/sellPlan/:hotelId/edit/:id', name: 'Editar Plan de Ventas', component: SaleAnualPlanEdit},
  { path: '/sellPlan/:hotelId/add', name: 'Ingresar Plan de Ventas', component: SaleAnualPlanAdd},

  // Monthly Sale Plans
  { path: '/monthlySalePlan/:hotelId/list/:anualSalePlanId', name: 'Planes mensuales de Ventas', component: MonthlySalePlanList},
  { path: '/monthlySalePlan/:hotelId/add/:anualSalePlanId', name: 'Insertar Plan Mensual de Venta', component: MonthlySalePlanAdd},
  { path: '/monthlySalePlan/:hotelId/edit/:anualSalePlanId/:monthlySalePlanId', name: 'Editar Plan Mensual de Venta', component: MonthlySalePlanEdit},

  // Pay Times Routers
  { path: '/payTimes', name: 'Períodos de Pago', component: PayTimeList, exact: true},
  { path: '/payTimes/import', name: 'Importar Períodos de Pago', component: ImportPayTimes},

  // Monthly Evaluation Rotuers 
  { path: '/performanceBook/:workerId/:payTimeId/:hotelId', name: 'Libro del Desempeño', component: ShowPerformanceBook},
  
  { path: '/evaluations/monthly/:hotelId', name: 'Evaluaciones Mensuales', component: MonthlyEvaluationList, exact: true},
  { path: '/evaluation/gastronomy/monthly/add/:hotelId/:workerId/:payTimeId', name: 'Insertar Evaluación Mensual de Gastronomía', component: AddMonthlyGastronomyEvaluation},
  { path: '/evaluation/gastronomy/monthly/edit/:hotelId/:workerId/:payTimeId/:evalId', name: 'Editar Evaluación Mensual de Gastronomía', component: EditMonthlyGastronomyEvaluation},
  { path: '/evaluation/gastronomy/monthly/show/:hotelId/:workerId/:payTimeId/:evalId', name: 'Consultar Evaluación Mensual de Gastronomía', component: ShowMonthlyGastronomyEvaluation},
  
  // Worker Incidents Router
  { path: '/incidents/worker/show/:hotelId/:workerId/:payTimeId/', name: 'Consultar Incidencias del trabajador', component: WorkerIncidents},
  
  // Monthly Melia Evaluations Routers
  { path: '/evaluation/monthly/melia/edit/:hotelId/:workerId/:payTimeId/:gastronomyEvaluationId/:meliaEvaluationId', name: 'Editar Evaluación Mensual de Melia', component: EditMonthlyMeliaEvaluation},
  { path: '/evaluation/monthly/melia/show/:hotelId/:workerId/:payTimeId/:gastronomyEvaluationId/:meliaEvaluationId', name: 'Consultar Evaluación Mensual de Melia', component: ShowMonthlyMeliaEvaluation},

  // Anual Evaluation Routers 
  { path: '/evaluations/anual/:hotelId', name: 'Evaluaciones Anuales', component: AnualEvaluationsList, exact: true},
  { path: '/evaluation/anual/add/:hotelId/:workerId/:year', name: 'Insertar Evaluación Anual', component: AnualEvaluationAdd },
  { path: '/evaluation/anual/edit/:hotelId/:workerId/:year/:evaluationId', name: 'Editar Evaluación Anual', component: AnualEvaluationEdit },
  { path: '/evaluation/anual/show/:hotelId/:workerId/:year/:evaluationId', name: 'Consultar Evaluación Anual', component: AnualEvaluationShow },
];

export default routes;
