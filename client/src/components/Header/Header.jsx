import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Formstack Logo.svg";
import { userSelector, logOut } from "../../app/features/auth";
import { Button } from "..";

import * as Styled from "./styles";

const Header = () => {
  const { isAuthenticated } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());

    localStorage.clear();
  };

  const menuItems = [
    {
      name: "My Forms",
      uri: "/forms",
    },
    {
      name: "Translate a Form",
      uri: "/translate",
    },
  ];

  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.NavGroup>
          <Styled.NavLogo>
            <Styled.Logo src={logo} onClick={() => navigate(`/`)} />
          </Styled.NavLogo>
          {menuItems.map((menuItem) => (
            <Styled.NavMenuItem key={menuItem.name}>
              <Styled.NavLink to={menuItem.uri}>{menuItem.name}</Styled.NavLink>
              {menuItem.children && (
                <Styled.FlyOutMenu>
                  <ul>
                    {menuItem.children.map((subItem) => (
                      <li key={subItem.name}>{subItem.name}</li>
                    ))}
                  </ul>
                </Styled.FlyOutMenu>
              )}
            </Styled.NavMenuItem>
          ))}

          {isAuthenticated ? (
            <>
              <Styled.NavButton>
                <Button text="Profile" navigateTo="/profile" />
              </Styled.NavButton>
              <Styled.NavButton>
                <Button text="Log Out" handler={handleLogout} />
              </Styled.NavButton>
            </>
          ) : (
            <Styled.NavButton>
              <Button text="Log In" href="http://localhost:3001/authenticate" />
            </Styled.NavButton>
          )}
        </Styled.NavGroup>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Header;
