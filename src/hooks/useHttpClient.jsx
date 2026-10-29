import { useMutation } from "@tanstack/react-query";



export default function useHttpClient(reqFn, options) {
  // Handle request type
  switch (true) {

    case options.method === "GET":
      break;

    case [
      'POST', 'DELETE', 'PATCH'
    ].includes(options.method):
      // Create mutation request
      const mutation = useMutation({
        'mutationFn': () => {
          
          return reqFn(...options.values)
        }
      })

      return mutation
  }
}