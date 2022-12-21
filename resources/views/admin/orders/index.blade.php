@extends('layouts.app') <!--estendo layout.app-->endforeach



@section('content')
@foreach ($groupedOrders as $groupedOrder)
<div>
    <h1>Orders:</h1>
    <h2>Address Order: {{ $groupedOrder['address_client'] }}</h2>
    <h3>Email Client: {{$groupedOrder['email_client']}}</h3>
    <h3>Total Price: {{$groupedOrder['total_price']}} Euro</h3>
    <div>Dish in orders:
        <div>
            @foreach ($groupedOrder['dishes'] as $dish)
                <div>{{ $dish['quantity'] }} {{$dish['name']}}</div>
            @endforeach
        </div>
    </div>

</div>
@endforeach
@endsection
