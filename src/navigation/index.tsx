import React from "react";
import {  useAuth } from "../hooks/useAuth";
import { SignedRoutes } from './signed.routes';
import UnsignedRoutes from "./unsigned.routes";
import Loading from '../screens/Loading';

export const Router = () => {
  const { signature, loading } = useAuth();

  if(loading) {
    return <Loading />
  }

  return (
    signature 
      ? <SignedRoutes />
      : <UnsignedRoutes />
  );
}