import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import { createStyles, NavLink as MantineNavLink } from "@mantine/core";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdOutlineFoodBank,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { BiHealth } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiGardeningShears } from "react-icons/gi";
const useStyles = createStyles((theme) => ({
  navlink: {
    textDecoration: "none",
  },
}));
interface INavigationProp {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
function Navigation({ setOpened }: INavigationProp) {
  const { classes } = useStyles();
  const handleClick = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  return (
    <div>
      <NavLink to="/" end className={classes.navlink} onClick={handleClick}>
        {({ isActive }) => (
          <MantineNavLink
            label="Home"
            active={isActive}
            icon={<AiOutlineHome size={20} />}
          />
        )}
      </NavLink>
      <NavLink to="/recente" className={classes.navlink} onClick={handleClick}>
        {({ isActive }) => (
          <MantineNavLink
            label="Recente"
            active={isActive}
            color="#339AFF"
            variant="subtle"
            icon={<MdOutlineWatchLater size={20} />}
          />
        )}
      </NavLink>
      <NavLink
        to="/categorie/mancare"
        className={classes.navlink}
        onClick={handleClick}
      >
        {({ isActive }) => (
          <MantineNavLink
            label="Mâncare"
            active={isActive}
            color="#339AFF"
            variant="subtle"
            icon={<MdOutlineFoodBank size={20} />}
          />
        )}
      </NavLink>
      <NavLink
        to="/categorie/tehnologie"
        className={classes.navlink}
        onClick={handleClick}
      >
        {({ isActive }) => (
          <MantineNavLink
            label="Tehnologie"
            active={isActive}
            color="#339AFF"
            variant="subtle"
            icon={<GrTechnology size={20} />}
          />
        )}
      </NavLink>
      <NavLink
        to="/categorie/sanatate"
        className={classes.navlink}
        onClick={handleClick}
      >
        {({ isActive }) => (
          <MantineNavLink
            label="Sănătate"
            active={isActive}
            color="#339AFF"
            variant="subtle"
            icon={<BiHealth size={20} />}
          />
        )}
      </NavLink>
      <NavLink
        to="/categorie/bani"
        className={classes.navlink}
        onClick={handleClick}
      >
        {({ isActive }) => (
          <MantineNavLink
            label="Bani"
            active={isActive}
            color="#339AFF"
            variant="subtle"
            icon={<FaMoneyBillAlt size={20} />}
          />
        )}
      </NavLink>
      <NavLink
        to="/categorie/casa-gradina"
        className={classes.navlink}
        onClick={handleClick}
      >
        {({ isActive }) => (
          <MantineNavLink
            label="Casă/Grădină"
            active={isActive}
            color="#339AFF"
            variant="subtle"
            icon={<GiGardeningShears size={20} />}
          />
        )}
      </NavLink>
      <NavLink
        to="/categorie/joburi"
        className={classes.navlink}
        onClick={handleClick}
      >
        {({ isActive }) => (
          <MantineNavLink
            label="Joburi"
            active={isActive}
            color="#339AFF"
            variant="subtle"
            icon={<MdOutlineWorkOutline size={20} />}
          />
        )}
      </NavLink>
    </div>
  );
}

export default Navigation;
