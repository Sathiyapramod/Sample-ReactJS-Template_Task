pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'start of run.,!'
                sh 'docker build -t pipeline_first .'
                echo 'end of run.,!! '
            }
        }
    }
}
