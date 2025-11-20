import React from "react";
import Layout from "@/components/layout/layout";
import PortfolioPage from "@/components/portfolio/portfolio-page";

export const revalidate = 300;

export default async function Home() {
  return (
    <Layout>
      <PortfolioPage />
    </Layout>
  );
}
