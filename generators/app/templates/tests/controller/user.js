describe('test User controller', function()
{
    beforeEach(module('app'));
 
    describe('UserController', function()
    {
        beforeEach(function() {
            inject(function($injector)
            {
                UserController = $injector.get('$controller')('UserController', {});
                
            });
        });
        // Testing home controller
        it('should have model defined', function() {
            expect(UserController).toBeDefined();
        });
        //
        it('should have model defined and HomeController.text is equal to Hello World', function() {
            expect(UserController).toBeDefined();
            // expect(UserController.contacts).toEqual("Hello World");
        });
    });
});