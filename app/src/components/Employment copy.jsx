import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import Box from "@mui/material/Box";
import getData from "../utils/getData";

const Employment = () => {
  const [employmentLoaded, setEmploymentLoaded] = useState(false);
  const [employmentObj, setEmploymentObj] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  useEffect(() => {
    getData("employment/").then((json) => {
      setEmploymentObj(json);
      setEmploymentLoaded(true);
    });
  }, []);

  if (!employmentLoaded) {
    return (
      <>
        <h1>Employment</h1>
        <h3>Loading...</h3>
      </>
    );
  }

  const employersData = employmentObj.coopTable.coopInformation;
  const totalPages = Math.ceil(employersData.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the array to get the current page data
  const currentEmployersData = employersData.slice(startIndex, endIndex);

  return (
    <>
      <Box className="my-20">
        <h3>Employment</h3>
        <div className="scrollable-table">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Employer</Table.HeaderCell>
                <Table.HeaderCell>Degree</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Term</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {currentEmployersData.map((employerData, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="text-white">
                    {employerData.employer}
                  </Table.Cell>
                  <Table.Cell className="text-white">
                    {employerData.degree}
                  </Table.Cell>
                  <Table.Cell className="text-white">
                    {employerData.city}
                  </Table.Cell>
                  <Table.Cell className="text-white">
                    {employerData.term}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="pagination">
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Menu floated="right" pagination>
                  <Menu.Item
                    as="a"
                    icon
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <Icon name="chevron left" />
                  </Menu.Item>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Menu.Item
                      key={i}
                      as="a"
                      onClick={() => setCurrentPage(i + 1)}
                      active={currentPage === i + 1}
                    >
                      {i + 1}
                    </Menu.Item>
                  ))}
                  <Menu.Item
                    as="a"
                    icon
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </div>
      </Box>
    </>
  );
};

export default Employment;
