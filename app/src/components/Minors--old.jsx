import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import Box from "@mui/material/Box";
import getData from "../utils/getData";

const Minors = () => {
  const [minorsLoaded, setminorsLoaded] = useState(false);
  const [minorsObj, setminorsObj] = useState();

  useEffect(() => {
    getData("minors/").then((json) => {
      setminorsObj(json);
      setminorsLoaded(true);
    });
  }, []);

  if (!minorsLoaded) {
    return (
      <>
        <h1>Minors</h1>
        <h3>Loading...</h3>
      </>
    );
  }

  const minors = minorsObj.UgMinors;

  return (
    <>
      <Box className="my-20">
        <h3>Minors</h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Minor Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {minors.map((minor, index) => (
              <Table.Row key={index}>
                <Table.Cell>{minor.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="1">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Box>
    </>
  );
};

export default Minors;
