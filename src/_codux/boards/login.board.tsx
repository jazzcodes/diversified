import { createBoard } from '@wixc3/react-board';
import Login_board_module from './login.board.module.scss';
import Classnames from 'classnames';
export default createBoard({
    name: 'Login',
    Board: () => (
        <div className={Login_board_module['login-body']}>
            <img src="/src/assets/bg-pattern.png" alt="" className={Login_board_module['bg-top']} />
            <div className={Login_board_module.login}>
                <div className={Login_board_module['login-card']}>
                    <div className={Login_board_module['login-card__header']}>
                        <div className={Login_board_module['login-card-logo-container']}>
                            <img src="/src/assets/logo.png" alt="" />
                        </div>
                        <h2></h2>Sign in to Uptime
                    </div>
                    <div className={Login_board_module['login-card__email-box']}>
                        Email
                        <input
                            placeholder="Enter your work email"
                            name="E"
                            className={Login_board_module['login-card__email']}
                        />
                    </div>
                    <button className={Login_board_module['login-card__btn']}>Continue</button>
                    <div className={Login_board_module['login-card__or']}>
                        <div className={Login_board_module['or-line']}></div>OR
                        <div className={Login_board_module['or-line']}></div>
                    </div>
                    <button
                        className={Classnames(
                            Login_board_module['login-card__btn'],
                            Login_board_module['login-card__btn-SSO']
                        )}
                    >
                        Sign in with Single Sign On
                    </button>
                </div>
                <div className={Login_board_module['login-footer']}>
                    Don&apos;t have an account?{' '}
                    <button className={Login_board_module['login-footer-btn']}>Sign Up</button>
                </div>
            </div>
            <img
                src="/src/assets/bg-pattern.png"
                alt=""
                className={Login_board_module['bg-bottom']}
            />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1364,
        canvasHeight: 5,
        windowHeight: 879,
        canvasWidth: 84,
        canvasMargin: {
            top: 50,
            bottom: 50,
        },
    },
});
