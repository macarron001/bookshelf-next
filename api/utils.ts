import { ToastMessage } from "components/toast"

export interface genericError {
  message: string
  request: { status: number }
}

export const errorHandler = (error: genericError) => {
  switch (error.request.status) {
    case 0:
      ToastMessage({
        type: "error",
        message: "Network error - is the server running?",
      })
      break
    case 500:
      ToastMessage({
        type: "error",
        message: "Request failed - check the server",
      })
      break
    case 404:
      ToastMessage({
        type: "error",
        message: "Data not found - check request parameters",
      })
  }
}
