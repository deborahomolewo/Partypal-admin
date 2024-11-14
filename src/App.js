// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Payment from './pages/payments/Payment';
import Reviews from './pages/reviews/Reviews';
import Analytics from './pages/analytics/Analytics';
import Event from './pages/event/Event';
import Planner from './pages/planner/Planner';
import EventDetail from './components/eventDetails/EventDetails'; // Import EventDetail
import { plannerInputs, userInputs } from "./formSource";
import { events } from './data/events'; // Import events data

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="vendor">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New Product" />} />
          </Route>
          <Route path="planner">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={plannerInputs} title="Add New Planner" />} />
          </Route>
          <Route path="events" element={<Event />} />
          <Route path="events/:eventId" element={<EventDetail events={events} />} /> {/* Event Detail Route */}
          <Route path="payments" element={<Payment />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="planner" element={<Planner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
