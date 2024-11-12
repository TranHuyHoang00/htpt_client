import { QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Provider as ProviderRedux } from "react-redux";

import { store } from "@/stores/redux/Store";
import { queryClient } from "@/lib/api-handler/react-query";
import { Notifications } from "@/components/notifications/Notification";
import { AppConfigProvider } from "@/config/AppConfigProvider";
import { ErrorBoundaryFallback } from "@/components/errors/ErrorBoundaryFallBack";
type ProviderProps = {
  children: React.ReactNode;
};
export const Provider = ({ children }: ProviderProps) => {
  return (
    <AppConfigProvider>
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <QueryClientProvider client={queryClient}>
          <Notifications />
          <ProviderRedux store={store}>{children}</ProviderRedux>
        </QueryClientProvider>
      </ErrorBoundary>
    </AppConfigProvider>
  );
};
