# n8n-nodes-hostbill

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

## Try it out with docker

The recommended way is using our docker image [Digital Boss' N8N custom nodes docker image](https://hub.docker.com/r/digitalboss/n8n-custom-nodes)

## Another way to try it out

[N8N documentation on custom nodes](https://docs.n8n.io/nodes/creating-nodes/create-n8n-nodes-module.html)

Clone the n8n-nodes-hostbill repository and execute:
```
# Install dependencies
npm install

# Build the code
npm run build

# "Publish" the package locally
npm link
```

Create an N8N installation and add the n8n-nodes-hostbill to it:
```
# Create an N8N installation
cd ..
mkdir n8n_install
cd n8n_install
npm init
npm install
npm install n8n

# "Install" the locally published module
npm link @digital-boss/n8n-nodes-hostbill

# Start n8n
npx n8n
```

# Contribution

To make this node even better, please let us know, [how you use it](mailto:info@digital-north-consulting.com). Commits are always welcome.

# Issues

If you have any issues, please [let us know on GitHub](https://github.com/digital-boss/n8n-nodes-hostbill/issues).

# About

Nodes by [digital-north-consulting.com](https://digital-north-consulting.com). For productive use and consulting on this, [contact us please](mailto:info@digital-north-consulting.com).

Special thanks to [N8n nodemation](https://n8n.io) workflow automation by Jan Oberhauser.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
