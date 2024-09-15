import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import SeatLayout from './pages/seatlayout/SeatLayout';
import Buses from './pages/buses/Buses';
import RouteComponent from './pages/route/Route';
import ScheduleComponent from './pages/schedules/Schedules';
import TicketPrice from './pages/ticketprice/TicketPrice';
import Trips from './pages/trip/Trips';
import FleetType from './pages/fleettype/FleetType';
import PaymentHistory from './pages/paymenthistory/PaymentHistory';
import BookingHistory from './pages/bookinghistory/BookingHistory';


function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   return (
      <Router>
         <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300">
            <Sidebar />
            <div className="flex-1 flex flex-col">
               <Navbar isAuthenticated={isAuthenticated} />
               <main className="flex-1 p-4 pt-64">
                  <Routes>
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/seat-layout" element={<SeatLayout />} />
                     <Route path="/buses" element={<Buses />} />
                     <Route path="/route" element={<RouteComponent />} />
                     <Route path="/schedule" element={<ScheduleComponent />} />
                     <Route path="/ticket-price" element={<TicketPrice />} />
                     <Route path="/trips" element={<Trips />} />
                     <Route path="/fleet-type" element={<FleetType />} />
                     <Route path="/payment-history" element={<PaymentHistory />} />
                     <Route path="/booking-history" element={<BookingHistory />} />
                  </Routes>
               </main>
            </div>
         </div>
         <div className=" bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300">
            <Footer />
         </div>
      </Router>
   );
}

export default App;
