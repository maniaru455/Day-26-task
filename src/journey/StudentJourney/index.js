import React from "react";
import { Link, Outlet } from "react-router-dom";
import AppHeader from "../../Components/AppHeader/AppHeader";


const routes = [
  {
    id: 'journey-1',
    label: 'Create Student',
    route: '/students/create'
  },
  {
    id: 'journey-2',
    label: 'Manage Student',
    route: '/students/manage'
  }
]

export default function index() {
  return (
    <div>
      <AppHeader JourneyName="Student Journey" routes={routes} />
      <Outlet />
    </div>
  );
}

