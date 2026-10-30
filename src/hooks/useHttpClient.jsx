import { useMutation } from "@tanstack/react-query";



export default function useHttpClient(reqFn, method) {
  // Handle request type
  switch (true) {

    case method === "GET":
      break;

    case ['POST', 'DELETE', 'PATCH'].includes(method):
      // Create mutation request
      const mutation = useMutation({
        'mutationFn': async (values) => {

          return await reqFn(
            values.convId,
            values.usrMsg
          )
        }
      });

      return mutation
  }
}