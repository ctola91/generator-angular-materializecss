describe('test home controller', function()
{
    beforeEach(module('app'));
 
    describe('HomeController', function()
    {
        beforeEach(function() {
            inject(function($injector)
            {
                HomeController = $injector.get('$controller')('HomeController', {});
                
            });
        });
        // Testing home controller
        it('should have model defined', function() {
            expect(HomeController).toBeDefined();
        });
        //
        it('should have model defined and HomeController.text is equal to Hello World', function() {
            expect(HomeController).toBeDefined();
            expect(HomeController.text).toEqual("Hello World");
        });
    });
});