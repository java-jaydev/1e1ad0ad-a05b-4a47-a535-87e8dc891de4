# tutorial-tic-tac-toe

[출처 | 리액트 공식문서](https://ko.react.dev/learn/tutorial-tic-tac-toe)

## NVM 설치 방법

### Windows

1. **nvm-windows 다운로드**:

   - [nvm-windows 릴리스 페이지](https://github.com/coreybutler/nvm-windows/releases)로 이동하여 최신 설치 프로그램을 다운로드합니다.

2. **설치**:

   - 다운로드한 설치 프로그램을 실행하고 지시에 따라 설치합니다.

3. **환경 변수 설정**:
   - 설치 후, 명령 프롬프트를 열고 `nvm` 명령어가 작동하는지 확인합니다.

### MacOS

1. **Homebrew를 사용하여 NVM 설치**:

   ```bash
   brew update
   brew install nvm
   ```

2. **NVM 디렉토리 생성 및 설정**:

   ```bash
   mkdir ~/.nvm
   ```

3. **쉘 프로파일 업데이트**:

   - `~/.bash_profile`, `~/.zshrc`, 또는 `~/.profile` 파일에 다음 줄을 추가합니다:

     ```bash
     export NVM_DIR="$HOME/.nvm"
     [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
     ```

4. **쉘 재시작**:

   - 터미널을 닫았다가 다시 열거나, `source ~/.bash_profile` 또는 `source ~/.zshrc` 명령어를 실행합니다.

5. **설치 확인**:
   - `nvm --version` 명령어로 설치가 제대로 되었는지 확인합니다.

## Node.js 설치 방법 (NVM 사용)

1. **Node.js 버전 확인**:

   - 사용 가능한 Node.js 버전을 확인하려면 다음 명령어를 사용하세요:

     ```bash
     nvm list available
     ```

2. **Node.js 설치**:

   - 원하는 버전을 설치하려면 다음 명령어를 사용하세요 (예: v16.13.0):

     ```bash
     nvm install 16.13.0
     ```

3. **Node.js 버전 설정**:

   - 특정 버전을 사용하려면 다음 명령어를 사용하세요:

     ```bash
     nvm use 16.13.0
     ```

4. **기본 Node.js 버전 설정**:

   - 기본으로 사용할 Node.js 버전을 설정하려면 다음 명령어를 사용하세요:

     ```bash
     nvm alias default 16.13.0
     ```

5. **설치 확인**:
   - `node -v` 명령어로 설치된 Node.js 버전을 확인합니다.

## 실행 방법

1. **프로젝트 클론**:

   ```bash
   git clone https://github.com/your-username/tutorial-tic-tac-toe.git
   cd tutorial-tic-tac-toe
   ```

2. **의존성 설치**:

   ```bash
   npm install
   ```

3. **개발 서버 실행**:

   ```bash
   npm start
   ```

4. **브라우저에서 열기**:
   - 기본적으로 `http://localhost:3000`에서 애플리케이션이 실행됩니다. 브라우저에서 해당 주소로 이동하여 게임을 시작하세요.
