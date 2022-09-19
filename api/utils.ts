import { ToastMessage } from "components/toast"

export interface genericError {
  message: string
  request: { status: number }
}

export const errorHandler = (error: genericError) => {
  let error_message = "error message" //placeholder for TS
  switch (error.request.status) {
    case 0:
      error_message = "Network error - is the server running?"
      break
    case 500:
      error_message = "Request failed - check the server"
      break
    case 404:
      error_message = "Data not found - check request parameters"
      break
    case 401:
      error_message = "Unauthorized - login first!"
      break
    default:
      error_message = error.message
  }

  ToastMessage({
    type: "error",
    message: error_message,
  })
}
