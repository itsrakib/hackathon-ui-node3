import CardTransactionRules from "./pages/card-transaction-rules";
import RiskDashboard from "./pages/risk-dashboard";

export default {
    pages: [
        {
            routeProps: {
                path: "/transaction-rules",
                component : CardTransactionRules,
            },
            name: "CardTransactionRules"
        },
        {
            routeProps: {
                path: "/risk-analysis",
                component : RiskDashboard,
            },
            name: "RiskAnalysis"
        }
    ]
}