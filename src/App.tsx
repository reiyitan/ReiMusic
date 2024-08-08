import "./App.css"; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { LoginPage, RegisterPage, HomePage } from "./pages";
import { PrivateRoute } from "./components";
import { FirebaseProvider, ServerProvider } from "./ContextProviders";

function App() {
    return (
            <BrowserRouter>
                <FirebaseProvider>
                    <ServerProvider>
                        <Routes>
                            <Route path="/" element={<Navigate to="/login" />} />
                            <Route path="/login" element={<LoginPage />} /> 
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/home" element={
                                <PrivateRoute redirectPath="/login">
                                        <HomePage />
                                </PrivateRoute>
                            }/>
                        </Routes>
                    </ServerProvider>
                </FirebaseProvider>
            </BrowserRouter>
    )
}

export default App
