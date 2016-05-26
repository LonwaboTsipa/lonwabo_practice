module.exports = function (wallaby) {

    return {
        files: [
            'src/**/*.ts',
            '!src/**/*.spec.ts',
            { pattern: 'src/**/*.json', instrument: false, load: false }
        ],
        tests: [
            'src/**/*.spec.ts'
        ],
        compilers: {
            '**/*.ts': wallaby.compilers.typeScript()
        },
        testFramework: 'jest',
        env: {
            type: 'node',
            runner: 'node'
        },
        setup: function (wallaby) {            
            wallaby.testFramework.configure({
                "automock": false,
                "globals": {
                    "jasmine": {
                        "DEFAULT_TIMEOUT_INTERVAL": 20000
                    }
                }
            });
        }
    };
};