# Part 1: Exercise 5

* ```kubectl get pods ```   See the running pod

```
NAME                              READY   STATUS    RESTARTS   AGE
stirng-gen-dep-78bb54b697-rj9f7   1/1     Running   0          37h
todoapp-dep-6cc4968bdf-vh4wt      1/1     Running   0          2m8s
```

*  This applies deployment declaration file with image tag 1.0.2    ```kubectl apply -f manifests/deployment.yaml ```

```  
    deployment.apps/todoapp-dep configured

```

* ```kubectl get pods ```

```
NAME                              READY   STATUS    RESTARTS   AGE
stirng-gen-dep-78bb54b697-rj9f7   1/1     Running   0          37h
todoapp-dep-6f878fb548-hg587      1/1     Running   0          6m12s

```

* ```kubectl port-forward todoapp-dep-6f878fb548-hg587 5050:5050 ``` forward the port 5050 on pod to 5050 on host
```
Forwarding from 127.0.0.1:5050 -> 5050
Forwarding from [::1]:5050 -> 5050
```

* ``` curl localhost:5050 ``` Test if the port is forwarded

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Express App</title>
</head>
<body>
    <h1>Welcome to the Todo App!</h1>
    <p>This page is served by Express.js</p>
</body>
</html>
```
