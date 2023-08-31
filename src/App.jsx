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
import ContextDemoComponent1 from "./components/ContextDemoComponent1";
import ContextDemoComponent2 from "./components/ContextDemoComponent2";
import { SampleProvider } from "./contexts/SampleContext";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import SecureRoute from "./SecureRoute";

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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SecureRoute />}>
              <Route path="/" element={<EmployeeList />}></Route>
              <Route path="/employees/:id" element={<EmployeeView />}></Route>
              <Route path="*" element={<NotFoundPageComponent />}></Route>
              <Route
                path="/employees/create"
                element={<EmployeeCreate />}
              ></Route>
              <Route
                path="/employees/edit/:id"
                element={<EmployeeEdit />}
              ></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      {/* <SampleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Demo1" element={<ContextDemoComponent1 />}></Route>
            <Route path="/Demo2" element={<ContextDemoComponent2 />}></Route>
          </Routes>
        </BrowserRouter>
      </SampleProvider> */}
    </>
  );
}

export default App;
