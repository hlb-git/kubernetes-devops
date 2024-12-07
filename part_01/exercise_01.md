```k3d cluster create -a 1```        create 1 agent node cluster

```kubectl create deployment string-gen --image=devhlb/string-generator```  this creates a deployment with the specified image


See pod status  ```$ kubectl get pods```
```
NAME                         READY   STATUS    RESTARTS   AGE
string-gen-d97d464d6-wm2hx   1/1     Running   0          58s
```

See pod logs  ```$ kubectl logs -f string-gen-d97d464d6-wm2hx```
```
Thu Dec 05 2024 16:11:35 GMT+0000 (Coordinated Universal Time): f5d58c3d-765b-4fd4-bb0f-abe975672b1b
Thu Dec 05 2024 16:11:40 GMT+0000 (Coordinated Universal Time): 3ed2c616-4e7e-4867-8aa6-a0cf1fbbe1b7
Thu Dec 05 2024 16:11:45 GMT+0000 (Coordinated Universal Time): 1a097280-2d45-4e61-bd2b-22b22311fb63
Thu Dec 05 2024 16:11:50 GMT+0000 (Coordinated Universal Time): 7310f762-e50c-4dd2-936b-65bc4a3a7c02
Thu Dec 05 2024 16:11:55 GMT+0000 (Coordinated Universal Time): 1ebb248a-6a13-48ab-aaef-ac8766ccdf77
...
```
