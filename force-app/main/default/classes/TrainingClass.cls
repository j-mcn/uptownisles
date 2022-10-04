public without sharing class TrainingClass {

    public static final String CONSTANT_NAME;

    static {
        CONSTANT_NAME = 'TEST';
    }

    public static void callStaticMethod() {
        System.debug('This is the constant : ' + CONSTANT_NAME);
    }
}
