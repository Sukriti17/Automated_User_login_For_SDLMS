import { Selector } from 'testcafe';

fixture`Login Test`
    .page`https://dev.deepthought.education/login`;

test('1. Test successful login with valid credentials', async (t) => {
    const name = Selector('#username');
    const pass = Selector('#password');
    const click = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');

    const v_user = 'sukriti';
    const v_pass = 'sukku';
    await t
        .typeText(name, v_user)
        .typeText(pass, v_pass)
        .click(click);
});

test('2. Test unsuccessful login attempts with invalid credentials', async (t) => {
    const name = Selector('#username');
    const pass = Selector('#password');
    const click = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
    const in_user = 'singh';
    const in_pass = 'sukriti';

    const initialURL = await t.eval(() => window.location.href);
    await t
        .typeText(name, in_user)
        .typeText(pass, in_pass)
        .click(click);
    await t.expect(await t.eval(() => window.location.href)).eql(initialURL);
});

test('3. Validate that appropriate error messages are displayed for invalid login attempts', async (t) => {
    const name = Selector('#username');
    const pass = Selector('#password');
    const click = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
    const error_Recipt = Selector('#login-error-notify');
    const in_user = 'sukku_singh';
    const in_pass = 'singh_';
    await t
        .typeText(name, in_user)
        .typeText(pass, in_pass)
        .click(click);
    await t.expect(error_Recipt.exists).ok();
});
test('4. On successful login, validate that the user is redirected to the dashboard screen', async (t) => {
    const name = Selector('#username');
    const pass = Selector('#password');
    const click = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
    const dash = Selector('.sdlms-header-section .sdlms-header');

    const v_user = 'Sukriti_Singh';
    const v_pass = 'Sukriti_Singh';
    await t
        .typeText(name, v_user)
        .typeText(pass, v_pass)
        .click(click);

    await t.expect(dash.exists).ok();
});