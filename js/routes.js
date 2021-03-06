var users = require('./users.js');
var listings = require('./listings.js');
var reviews = require('./reviews.js');
var alerts = require('./alerts.js');
var transactions = require('./transactions.js');


function createRoutes (router) {
    router.get('/', function(req, res) {
        res.json({"output": "go elsewhere"});
    });

    // User requests
    router.route('/users')
        .get(users.getUsers)
        .post(users.newUser);
    router.route('/users/:id')
        .get(users.getUser)
        .patch(users.updateUser)
        .delete(users.deleteUser);

    // Listing requests
    router.route('/listings')
        .get(listings.getAllListings)
        .post(listings.newListing);

    // Search listings
    router.route('/listings/filter')
        .get(listings.getListings);

    router.route('/listings/:id')
        .get(listings.getListing)
        .patch(listings.updateListing)
        .delete(listings.deleteListing);
    router.route('/listings/user/:id')
        .get(listings.getUserListings);

    router.route('/listings/keyword/:id')
        .get(listings.getKeyword);

    // Reviews requests
    router.route('/reviews/:id')
        .get(reviews.getReview);
    router.route('/reviews')
        .post(reviews.getReview);

    router.route('/transactions')
        .get(transactions.getTransactions);
    router.route('/transactions/user/:id')
        .get(transactions.getUserTransactions);
    router.route('/transactions/transactionID/')
        .get(transactions.getTransactionID);
    router.route('/transactions/:id')
        .get(transactions.getSingleTransaction)
        .delete(transactions.deleteTransactionEntry);

    router.route('/transactions/interested/:id')
        .get(transactions.getInterested);

    // Other backend entry points
    router.post('/renterinterested', transactions.renterInterested);
    router.post('/selectrenter', transactions.selectRenter);
    router.post('/renterconfirm', transactions.renterConfirm);
    router.post('/renterclose', transactions.renterClose);
    router.post('/ownerclose', transactions.ownerClose);


       //Alerts requests
    router.route('/alerts/:id')
        .get(alerts.getAlerts)
        .post(alerts.postAlert);


    router.route('/alerts/user/:userID/single/:alertID')
        .patch(alerts.setAlertToRead)
        .get(alerts.getAlert);

        // Test routing
    // Go to localhost:3000/test
    router.route('/test')
        .get(function(req,res,next){
            res.sendFile(__dirname+'/tester.html');
        });
    router.route('/test/users')
        .get(users.getUsers)
        .post(users.newUser);
    router.route('/test/users/:id')
        .get(users.getUser)
        .patch(users.updateUser)
        .delete(users.deleteUser);
    router.route('test/listings/:id')
        .get(listings.getListing)
        .patch(listings.updateListing)
        .delete(listings.deleteListing);
    router.route('/test/listings')
        .get(listings.getAllListings)
        .post(listings.newListing);
    router.route('/test/reviews')
        .post(reviews.newReview);
    router.route('/test/transactions')
        .get(transactions.getTransactions);

    // Other backend entry points
    router.post('/test/renterinterested', transactions.renterInterested);
    router.post('/test/selectrenter', transactions.selectRenter);
    router.post('/test/renterconfirm', transactions.renterConfirm);
    router.post('/test/renterclose', transactions.renterClose);
    router.post('/test/ownerclose', transactions.ownerClose);

}

module.exports = {createRoutes};
