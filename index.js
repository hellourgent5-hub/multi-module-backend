const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoutes = require('./admin/routes/admin.routes');
const customerRoutes = require('./customer/routes/customer.routes');
const storeRoutes = require('./store/routes/store.routes');
const deliveryRoutes = require('./delivery/routes/delivery.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/admin', adminRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/store', storeRoutes);
app.use('/api/delivery', deliveryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
