# n8n-nodes-hostbill

![n8n.io - Workflow Automation](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

[n8n Node](https://docs.n8n.io/integrations/) connected with [HostBill API](http://api.hostbillapp.com/).

## Implemented operations

```json
{
  "client": {
    "create": "http://api.hostbillapp.com/clients/addClient/",
    "delete": "http://api.hostbillapp.com/clients/deleteClient/",
    "get": "http://api.hostbillapp.com/clients/getClientDetails/",
    "getAll": "http://api.hostbillapp.com/clients/getClients/",
    "getDomains": "https://api.hostbillapp.com/clients/getClientDomains/",
    "update": "http://api.hostbillapp.com/clients/setClientDetails/",
    "verifyLogin": "https://api.hostbillapp.com/clients/verifyClientLogin/"
  },
  "clientContact": {
    "create": "http://api.hostbillapp.com/clients/addClientContact/",
    "delete": "http://api.hostbillapp.com/clients/deleteClientContact/",
    "getByClient": "http://api.hostbillapp.com/clients/getClientContacts/",
    "update": "http://api.hostbillapp.com/clients/setContactDetails/"
  },
  "invoice": {
    "create": "https://api.hostbillapp.com/invoices/addInvoice/",
    "addItem": "https://api.hostbillapp.com/invoices/addInvoiceItem/",
    "addPayment": "https://api.hostbillapp.com/invoices/addInvoicePayment/",
    "setStatus": "https://api.hostbillapp.com/invoices/setInvoiceStatus/",
    "delete": "https://api.hostbillapp.com/invoices/deleteInvoice/",
    "get": "https://api.hostbillapp.com/invoices/getInvoiceDetails/",
    "getAll": "https://api.hostbillapp.com/invoices/getInvoices/"
  },
  "order": {
    "create": "https://api.hostbillapp.com/orders/addOrder/",
    "delete": "http://api.hostbillapp.com/orders/deleteOrder/",
    "get": "http://api.hostbillapp.com/orders/getOrderDetails/",
    "getAll": "http://api.hostbillapp.com/orders/getOrders/",
    "setStatus": "http://api.hostbillapp.com/orders/setOrderStatus/",
    "setActive": "http://api.hostbillapp.com/orders/setOrderActive/"
  },
  "account": {
    "create": "http://api.hostbillapp.com/accounts/accountCreate/",
    "delete": "http://api.hostbillapp.com/accounts/accountTerminate/",
    "get": "http://api.hostbillapp.com/accounts/getAccountDetails/",
    "getAll": "http://api.hostbillapp.com/accounts/getAccounts/",
    "update": "http://api.hostbillapp.com/accounts/editAccountDetails/",
    "addAddon": "https://api.hostbillapp.com/accounts/addAddonToAccount/"
  },
  "service": {
    "getProductDetails": "http://api.hostbillapp.com/services/getProductDetails/",
    "getProducts": "http://api.hostbillapp.com/services/getProducts/",
    "getAddons": "http://api.hostbillapp.com/services/getAddons/"
  },
  "domain": {
    "register": "http://api.hostbillapp.com/domains/domainRegister/",
    "transfer": "http://api.hostbillapp.com/domains/domainTransfer/",
    "renew": "http://api.hostbillapp.com/domains/domainRenew/",
    "delete": "http://api.hostbillapp.com/domains/domainDelete/",
    "epp": "http://api.hostbillapp.com/domains/domainEPP/",
    "get": "http://api.hostbillapp.com/domains/getDomainDetails/",
    "getAll": "http://api.hostbillapp.com/domains/getDomains/"
  }
}
```

[Click here to see the rest of the README](https://digital-boss.de/n8n/?packageName=n8n-nodes-hostbill)

