//Generated by wsdl2apex

public class AsyncHelloSoap {
    public class helloResponseFuture extends System.WebServiceCalloutFuture {
        public String getValue() {
            HelloSoap.helloResponse response = (HelloSoap.helloResponse)System.WebServiceCallout.endInvoke(this);
            return response.Message;
        }
    }
    public class AsyncHelloEndpointPort {
        public String endpoint_x = 'http://apps.learnwebservices.com/services/hello';
        public Map<String,String> inputHttpHeaders_x;
        public String clientCertName_x;
        public Integer timeout_x;
        private String[] ns_map_type_info = new String[]{'http://learnwebservices.com/services/hello', 'HelloSoap'};
        public AsyncHelloSoap.helloResponseFuture beginSayHello(System.Continuation continuation,String Name) {
            HelloSoap.helloRequest request_x = new HelloSoap.helloRequest();
            request_x.Name = Name;
            return (AsyncHelloSoap.helloResponseFuture) System.WebServiceCallout.beginInvoke(
              this,
              request_x,
              AsyncHelloSoap.helloResponseFuture.class,
              continuation,
              new String[]{endpoint_x,
              '',
              'http://learnwebservices.com/services/hello',
              'HelloRequest',
              'http://learnwebservices.com/services/hello',
              'HelloResponse',
              'HelloSoap.helloResponse'}
            );
        }
    }
}