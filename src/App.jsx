import ClickCountComponent from "./components/ClickCountComponent";
import Employee from "./components/EmployeeComponent";
import EventComponent from "./components/EventComponent";
import UseEffectDemoComponent from "./components/UseEffectDemoComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import EmployeeList from "./pages/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeView from "./pages/EmployeeView";
import NotFoundPageComponent from "./components/NotFoundPageComponent";
import EmployeeCreate from "./pages/EmployeeCreate";
import EmployeeEdit from "./pages/EmployeeEdit";

function App() {
  return (
    <>
      {/* <Employee
        id="007"
        firstName="James"
        lastName="Bond"
        age="unknown"
        departmentId="1"
        departmentName="CIA"
      /> */}

      {/* <EventComponent /> */}

      {/* <ClickCountComponent /> */}

      {/* <WelcomeComponent /> */}

      {/* <UseEffectDemoComponent /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employees/:id" element={<EmployeeView />}></Route>
          <Route path="*" element={<NotFoundPageComponent />}></Route>
          <Route path="/employees/create" element={<EmployeeCreate />}></Route>
          <Route path="/employees/edit/:id" element={<EmployeeEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
