import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/img/logo.png";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavTitle,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
  CSidebarMinimizer,
} from "@coreui/react";
import { defaultApi } from "src/publicUrl";
import axios from "axios";
// Icons
import CIcon from "@coreui/icons-react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FastFoodIcon from "@material-ui/icons/Fastfood";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import AddIcon from "@material-ui/icons/Add";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import {
  FaDownload,
  FaHotel,
  FaDollarSign,
  FaThList,
  ImCoinDollar,
  GiPayMoney,
  SiWorkplace,
  CgViewMonth,
} from "react-icons/all";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const [hotels, setHotels] = useState([]);

  let show = useSelector((state) => state.sidebarShow.sidebarShow);
  if (show === undefined) {
    show = "responsive";
  }

  // User Login Selector
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Load Hotel list
  const getHotels = async () => {
    const { data } = await axios.get(`${defaultApi}/api/hotels/allow/`);
    setHotels(data);
  };

  if (hotels.length === 0) {
    getHotels();
  }

  return (
    <CSidebar
      show={show}
      className="sideBackground"
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      {/* Logo */}
      <CSidebarBrand className="d-md-down-none bg-white borderAux" to="/">
        <CImg
          src={Logo}
          className="c-sidebar-brand-full"
          alt="logo"
          height={65}
        />
      </CSidebarBrand>
      {/* Home Dashboard */}
      <CSidebarNav>
        <CSidebarNavItem
          name="Panel Administrativo"
          to="/dashboard"
          icon={<HomeOutlinedIcon className="c-sidebar-nav-icon" />}
        />
        <CSidebarNavTitle style={{ marginBottom: "-3px", marginTop: "-3px" }}>
          {userInfo?.isFoodAndDrinkBoss
            ? " Gestiones del Desempeño"
            : "Gestiones del Sistema"}
        </CSidebarNavTitle>

        {userInfo?.isAdmin && (
          <div>
            {/* Users */}
            <CSidebarNavDropdown
              name="Usuarios"
              icon={<GroupIcon className="c-sidebar-nav-icon" />}
            >
              {/* User List */}
              <CSidebarNavItem
                name="Listado"
                to="/users/list"
                icon={
                  <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />
                }
              />
              {/* User Add */}
              <CSidebarNavItem
                name="Insertar Usuario"
                to="/users/list/add"
                icon={<PersonAddIcon className="c-sidebar-nav-icon" />}
              />
            </CSidebarNavDropdown>

            {/* Hotels */}
            <CSidebarNavDropdown
              name="Hoteles"
              icon={<FaHotel className="c-sidebar-nav-icon" />}
            >
              {/* Hotel List */}
              <CSidebarNavItem
                name="Listado"
                to="/hotels/"
                icon={
                  <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />
                }
              />
              {/* Hotel Add */}
              <CSidebarNavItem
                name="Insertar Hotel"
                to="/hotels/add"
                icon={<AddIcon className="c-sidebar-nav-icon" />}
              />
            </CSidebarNavDropdown>
          </div>
        )}

        {userInfo?.isFoodAndDrinkBoss && (
          <div>
            {/* Workers */}
            <CSidebarNavDropdown
              name="Trabajadores"
              icon={<GroupIcon className="c-sidebar-nav-icon" />}
            >
              {/* Hotels by Area */}
              {hotels?.map((hotel) => (
                <CSidebarNavItem
                  name={hotel.name}
                  to={`/workers/${hotel.id}`}
                  key={hotel.id}
                  icon={<FaHotel className="c-sidebar-nav-icon" />}
                />
              ))}
            </CSidebarNavDropdown>

            {/* Evaluation */}
            <CSidebarNavDropdown
              name="Evaluaciones"
              icon={<PlaylistAddCheckIcon className="c-sidebar-nav-icon" />}
            >
              <CSidebarNavDropdown
                name="Mensuales"
                icon={<CgViewMonth className="c-sidebar-nav-icon" />}
              >
                {hotels?.map((hotel) => (
                  <CSidebarNavItem
                    name={hotel.name}
                    to={`/evaluations/monthly/${hotel.id}`}
                    key={hotel.id}
                    icon={<FaHotel className="c-sidebar-nav-icon" />}
                  />
                ))}
              </CSidebarNavDropdown>

              <CSidebarNavDropdown
                name="Anuales"
                icon={<PlaylistAddCheckIcon className="c-sidebar-nav-icon" />}
              >
                {hotels?.map((hotel) => (
                  <CSidebarNavItem
                    name={hotel.name}
                    to={`/evaluations/anual/${hotel.id}`}
                    key={hotel.id}
                    icon={<FaHotel className="c-sidebar-nav-icon" />}
                  />
                ))}
              </CSidebarNavDropdown>
            </CSidebarNavDropdown>

            {/* Sell PLan */}
            <CSidebarNavDropdown
              name="Plan de Ventas"
              icon={<FaDollarSign className="c-sidebar-nav-icon" />}
            >
              {/* Hotels by Area */}
              {hotels?.map((hotel) => (
                <CSidebarNavItem
                  name={hotel.name}
                  to={`/sellPlans/${hotel.id}`}
                  key={hotel.id}
                  icon={<FaHotel className="c-sidebar-nav-icon" />}
                />
              ))}
            </CSidebarNavDropdown>

            <CSidebarNavTitle
              style={{ marginBottom: "-2px", marginTop: "-2px" }}
            >
              Datos Extras Necesarios
            </CSidebarNavTitle>

            {/* Sell Area */}
            <CSidebarNavDropdown
              name="Puntos de Ventas"
              icon={<StoreFrontIcon className="c-sidebar-nav-icon" />}
            >
              {/* Hotels by Area */}
              {hotels?.map((hotel) => (
                <CSidebarNavItem
                  name={hotel.name}
                  to={`/sellArea/${hotel.id}`}
                  key={hotel.id}
                  icon={<FaHotel className="c-sidebar-nav-icon" />}
                />
              ))}
            </CSidebarNavDropdown>

            {/* Families */}
            <CSidebarNavDropdown
              name="Familias"
              icon={<FastFoodIcon className="c-sidebar-nav-icon" />}
            >
              {/* Family List */}
              <CSidebarNavItem
                name="Listado"
                to="/families"
                icon={
                  <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />
                }
              />
              {/* Import Family */}
              <CSidebarNavItem
                name="Importar Familias"
                to="/families/import"
                icon={<FaDownload className="c-sidebar-nav-icon" />}
              />
            </CSidebarNavDropdown>

            {/* Pay Times */}
            <CSidebarNavDropdown
              name="Periodos de Pago"
              icon={<GiPayMoney className="c-sidebar-nav-icon" />}
            >
              {/* Family List */}
              <CSidebarNavItem
                name="Listado"
                to="/payTimes"
                icon={
                  <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />
                }
              />
              {/* Import Family */}
              <CSidebarNavItem
                name="Importar Periodo de Pago"
                to="/payTimes/import"
                icon={<FaDownload className="c-sidebar-nav-icon" />}
              />
            </CSidebarNavDropdown>

            {/* Charges */}
            <CSidebarNavItem
              name={"Cargos Laborales"}
              to={`/charges`}
              icon={<SiWorkplace className="c-sidebar-nav-icon" />}
            />
            <CSidebarNavItem
              name={"Categorías Ocupacionales"}
              to={`/categories`}
              icon={<FaThList className="c-sidebar-nav-icon" />}
            />
            <CSidebarNavItem
              name="Moneda Base"
              to="/coins"
              icon={<ImCoinDollar className="c-sidebar-nav-icon" />}
            />
          </div>
        )}
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
