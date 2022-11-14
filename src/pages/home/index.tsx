import { useState } from "react";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { Form } from "@rjsf/bootstrap-4";
import {
  Row,
  Col,
  Container,
  Navbar,
  Table,
  Nav,
  Card,
  // Form,
  Button,
  Modal,
  Dropdown,
} from "react-bootstrap";
import {
  BoxSeam,
  Calendar2,
  CashStack,
  ChatLeft,
  Folder,
  Gear,
  House,
  ListCheck,
  Person,
  PlusCircle,
  Search,
  Sliders,
  SortUp,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
// import { GET_FAQS } from "./queries";
// import { useQuery } from "@apollo/client";
// import { flattenObj } from "../../components/utils/responseFlatten";
// import { useState } from "react";
import "./FAQs.css";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showEditMode, setShowEditMode] = useState(false);
  const handleEditModeClose = () => {
    console.log(editIndex)
    console.log(tableData)
    setShowEditMode(false);
    setFormData([]);
    setEditIndex(null)
  };
  const handleEditModeShow = () => setShowEditMode(true);
  const [showViewMode, setShowViewMode] = useState(false);
  const handleViewModeClose = () => {
    setShowViewMode(false);
    setFormData([]);
  };
  const handleViewModeShow = () => setShowViewMode(true);
  const [formData, setFormData] = useState<any>();
  const [editIndex,setEditIndex] = useState<any>();
  const [tableData, setTableData] = useState<any>([]);
  const defaultDate = new Date().toISOString().slice(0, 10);
  const schema: RJSFSchema = {
    definitions: {
      statusEnum: {
        type: "string",
        enum: ["New", "Closed", "Old"],
      },
      sourceEnum: {
        type: "string",
        enum: ["Website", "Word of mouth", "Application", "Social media"],
      },
    },
    type: "object",
    "ui:options": {
      "submitButtonOptions": {
        "norender": false,
        "submitText": "Close"
      }
    },
    properties: {
      stringFormats: {
        type: "object",
        title: "Lead",
        properties: {
          status: {
            $ref: "#/definitions/statusEnum",
            title: "Status",
          },
          source: {
            $ref: "#/definitions/sourceEnum",
            title: "Source",
          },
        },
      },
      leadDetails: {
        type: "object",
        title: "Lead Details",
        properties: {
          name: {
            type: "string",
            title: "Name",
          },
          telephone: {
            type: "string",
            title: "Number",
            minLength: 10,
          },
          textarea: {
            type: "string",
            title: "Notes",
          },
          modifiedDate: {
            type: "string",
            format: "date",
            title: "Modified Date",
            default: defaultDate,
          },
        },
      },
    },
  };
  const uiSchema: UiSchema = {
    leadDetails: {
      name: {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:autocomplete": "family-name",
      },
      telephone: {
        "ui:options": {
          inputType: "tel",
        },
      },
      modifiedDate: {
        "ui:disabled": true,
      },
      textarea: {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5,
        },
      },
    },
  };
  const uiSchemaViewMode: UiSchema = {
    leadDetails: {
      name: {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:autocomplete": "family-name",
        "ui:disabled": true,
      },
      telephone: {
        "ui:options": {
          inputType: "tel",
        },
        "ui:disabled": true,
      },
      modifiedDate: {
        "ui:disabled": true,
      },
      textarea: {
        "ui:widget": "textarea",
        "ui:disabled": true,
        "ui:options": {
          rows: 5,
        },
      },
    },
    stringFormats: {
      status: {
        "ui:disabled": true,
      },
      source: {
        "ui:disabled": true,
      },
    },
    
  };
  const captureAndClose = (e: any) => {
    console.log("hi");
    handleClose();
    if (e.formData) {
      tableData.push(e.formData);
    }
  };
  const captureModifyAndClose = (e: any) => {
    console.log(editIndex,'imp2')
    console.log(e,'imp1')
    console.log(tableData)
    tableData[editIndex] = e.formData;
    handleEditModeClose()
  }
  const dateConverter = (date: any) => {
    console.log(date);
    var today = new Date(`${date}`);
    var dateFormatted = today.toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return dateFormatted;
  };
  console.log(tableData, "tableData");
  const viewDetails = (data: any) => {
    handleViewModeShow();
    setFormData(data);
  };
  const editDetails = (data: any,index:any) => {
    handleEditModeShow();
    setFormData(data);
    setEditIndex(index)
  };
  const deleteItem = (index:any) => {
    tableData.splice(index, 1);
  }
  return (
    <div className="layout">
      <Row className="home-row">
        <Col xs={2}>
          <Navbar
            className="shadow-sm side-navbar"
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Nav defaultActiveKey="link-0" className="flex-column">
              <Nav.Link href="#" eventKey="link-0">
                <House />
                &nbsp; Home
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-1">
                <ChatLeft />
                &nbsp; Chats
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-2">
                <Calendar2 />
                &nbsp; Schedule
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-3">
                <Person />
                &nbsp; Clients
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-4">
                <ListCheck />
                &nbsp; Bookings
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-5">
                <Sliders />
                &nbsp; Programs
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-6">
                <BoxSeam />
                &nbsp; Packages
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-7">
                <Folder />
                &nbsp; Resources
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-8">
                <CashStack />
                &nbsp; Finance
              </Nav.Link>
              <Nav.Link href="#" eventKey="link-9">
                <Gear />
                &nbsp; Settings
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col xs="10">
          <span style={{ fontSize: "50px", fontWeight: "500" }}>Clients</span>
          <Card>
            <Navbar bg="light" variant="light">
              <Container>
                <Nav className="me-auto">
                  <Nav.Link href="#">Clients</Nav.Link>
                  <Nav.Link href="#">Tab2</Nav.Link>
                  <Nav.Link href="#">Tab3</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <Card.Body>
              <Row>
                <Col xs="10" style={{ display: "flex" }}>
                  <Search className="search-icon" />
                  {/* <Form className="form-search">
                    <Form.Control
                      type="search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form> */}
                </Col>
                <Col>
                  <Button variant="light" onClick={handleShow}>
                    Add Lead <PlusCircle className="plus-icon" />
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col xs="11">{""}</Col>
                <Col xs="1">
                  <>
                    <SortUp size={20} />
                    Sort
                  </>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Lead Date</th>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Source</th>
                      <th>Last Updated</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item,index) => (
                      <tr>
                        <td>
                          <p>{dateConverter("2019-05-26")}</p>
                          <p>8:00 AM</p>
                        </td>
                        <td>{item.leadDetails.name}</td>
                        <td>+91 {item.leadDetails.telephone}</td>
                        <td>dummy@gmail.com</td>
                        <td>{item.stringFormats.source}</td>
                        <td>{dateConverter(item.leadDetails.modifiedDate)}</td>
                        <td>
                          <Button variant="light">
                            {item.stringFormats.status}
                          </Button>
                        </td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              <ThreeDotsVertical />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                href="#/action-1"
                                onClick={() => editDetails(item,index)}
                              >
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="#/action-2"
                                onClick={() => viewDetails(item)}
                              >
                                View
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3" onClick={() => deleteItem(index)}>
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={(e) => captureAndClose(e)}
        />
      </Modal>
      <Modal size="lg" show={showViewMode} onHide={handleViewModeClose}>
        <Form
          schema={schema}
          uiSchema={uiSchemaViewMode}
          formData={formData}
          onSubmit={() => handleViewModeClose()}
          readonly
        />
      </Modal>
      <Modal size="lg" show={showEditMode} onHide={handleEditModeClose}>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onSubmit={(e) => captureModifyAndClose(e)}
        />
      </Modal>
    </div>
  );
}
