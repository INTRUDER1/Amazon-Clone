const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response, request } = require('express');
const stripe = require("stripe")("sk_test_51HixlNEUSLvodRlWzVVmnhoAjp7jL4UZiuqtY9THUlliqSmPpKzqvcKYvph2M0midbBlL6ZiQvXK4GckrfIFw6RV00GStJIlxi")



const