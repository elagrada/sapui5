sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"], 
	
function(Controller,MessageToast,JSONModel,ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcamp.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
			onInit: function() {
				var oData = {
					field: { username: "sapui5" }
				};
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel);
				
				
				var i18nModel = new ResourceModel({
						bundleName: "sap.ui.bootcamp.i18n.i18n" // string
					});
				this.getView().setModel(i18nModel,"i18n");
				
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	onLoginPress: function(){
		var view = this.getView();
		var uname = view.byId("Uname").getValue();
		var pword = view.byId("Pword").getValue();
		
		if (uname.length === 0){
			MessageToast.show("Username must not be empty");
		}
		else
		if (uname.length < 6 || uname.length > 8) {
			MessageToast.show("Username must be 6 to 8 characters only");
		}
		else
		if (pword.length === 0){
			MessageToast.show("Password must not be empty");
		}
		else
		if (pword.length < 7 || pword.length > 10) {
			MessageToast.show("Password must be 7 to 10 characters only");
		}
		else
		if (uname !== "sapui5" || pword !== "sapui5x") {
			MessageToast.show("Username and password is incorrect");
		}
		else {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg",[sRecipient]);
			MessageToast.show(sMsg);
			// MessageToast.show("Good day mate!");
			
		}
		
		// sap.m.MessageToast.show("Yun oh!" + " " + uname + " " + uname.length );	
	}
	
	});

});