(function(){
    describe("app module",function(){
        beforeEach(module("crudApp"));
      
        describe("crudCtrl",function(){
            var scope,controller;
          beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            controller = $controller;
          }));
      
          it("should be hello manmon",function(){
            controller("crudCtrl",{$scope: scope});
            expect(scope.message).toBe("manmon is ready")
          })
        });
      });
})();
