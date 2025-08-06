___

- ### Prerequisites (Not Compulsary)
- You can deploy file in new namespace
- e.g. kubectl create ns moocfi

___

- ### Steps to run
- kubectl create ns moocfi
- kubectl apply -f deployment.yaml -n moocfi
- kubectl logs log-output -n moocfi

___

- ### Deleting all resource
- kubectl delete pod log-output -n moocfi
- kubectl delete ns moocfi
