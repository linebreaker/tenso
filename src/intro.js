( function () {
"use strict";

var turtleio = require( "turtle.io" ),
    SERVER   = "tenso/{{VERSION}}",
    CONFIG   = require( __dirname + "/../config.json" ),
    keigai   = require( "keigai" ),
    util     = keigai.util,
    array    = util.array,
    clone    = util.clone,
    iterate  = util.iterate,
    json     = util.json,
    merge    = util.merge,
    parse    = util.parse,
    uuid     = util.uuid,
    session  = require( "express-session" ),
    passport = require( "passport" ),
    httpsync = require( "http-sync" ),
    BasicStrategy    = require( "passport-http" ).BasicStrategy,
    BearerStrategy   = require( "passport-http-bearer" ).Strategy,
    FacebookStrategy = require( "passport-facebook" ).Strategy,
    GoogleStrategy   = require( "passport-google" ).Strategy,
    TwitterStrategy  = require( "passport-twitter" ).Strategy;
